/* eslint-disable react-hooks/exhaustive-deps */
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CancelIcon from '@material-ui/icons/Cancel';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as yup from 'yup';
import { Axios } from '../../../src/config';
import { ICImgNull } from '../../assets/Icons';
import {
  AlertValidationForm,
  Button,
  Divider,
  FormInput,
  Toast,
} from '../../components/atoms';
import { Text } from '../../components/atoms/Typography';
import { customMedia } from '../../components/Layouts';
import { addProduct, getItemProduct, showLoading } from '../../redux/actions';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const SellerSellingProducts = () => {
  const [category, setCategory] = useState([]);
  const [selectedColor, setSelectedColor] = useState();
  const [description, setDescription] = useState('');
  const [uploadImage, setUploadImage] = useState([]);
  const [previewAvatar, setPreviewAvatar] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((state) => state.userReducer);
  const token = localStorage.getItem('token');
  const { exist, data: currentValue } = useSelector(
    (state) => state.productItemReducer
  );
  const validationForm = yup.object({
    name: yup
      .string()
      .required('Name is required')
      .max(25, 'Name product must be less than 25 charaters')
      .nullable(),
    price: yup
      .number()
      .typeError('Amount must be a number')
      .required('Price is required'),
    stock: yup.number().required('Stock is required'),
    category: yup.string().required('Category is required'),
  });
  // console.log(exist);
  // UPDATE PRODUCTS
  const idProductUpdate = history.location.state?.id;
  // console.log(idProductUpdate);

  // HANDLE FORM
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   watch,
  //   getValues,
  // } = useForm();

  // const { slug } = useParams();

  useEffect(() => {
    if (idProductUpdate) {
      dispatch(getItemProduct(idProductUpdate, token));
    }
    Axios.get(`/category`)
      .then((res) => {
        const resData = res.data.data;
        // console.log('resData', resData);
        setCategory(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idProductUpdate]);

  // Upload Image

  const handleInputImageProduct = async (e) => {
    const fileImages = e.target.files;
    // console.log(Array.isArray(fileImages));
    // console.log(fileImages);
    // return;
    const fileUpload = [];
    Array.from(fileImages).map((image) => {
      if (
        image.type === 'image/jpeg' ||
        image.type === 'image/jpg' ||
        image.type === 'image/png' ||
        image.type === 'image/gif'
      ) {
        if (image.size > 1048576 * 2) {
          Toast(
            `${image.name} | Failed to upload. max size file is 2mb`,
            'error'
          );
        } else {
          fileUpload.push(image);
        }
      } else {
        Toast(
          `${image.name} |  Failed to upload. Only image is allowed`,
          'error'
        );
      }
    });
    setUploadImage(fileUpload);
  };
  console.log('uploadImage', uploadImage);
  console.log('previewAvatar', previewAvatar);

  const handlePreview = () => {
    if (uploadImage.length > 0) {
      let tmp = [];
      for (let i = 0; i < uploadImage.length; i++) {
        const process = URL.createObjectURL(uploadImage[i]);
        tmp.push(process);
      }
      setPreviewAvatar(tmp);
    }
  };

  useEffect(() => {
    handlePreview();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadImage]);

  // SELECT COLOR
  const [size, setSize] = useState({
    red: false,
    blue: false,
    orange: false,
    pink: false,
    yellow: false,
  });

  const handleColors = (change) => {
    const resetSize = {
      red: false,
      blue: false,
      orange: false,
      pink: false,
      yellow: false,
    };
    setSize({
      ...resetSize,
      [change.value]: size[change.value] === true ? false : true,
    });
    setSelectedColor(change.value);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('owner', userState.idUser);
    formData.append('description', description);
    formData.append('color', selectedColor);
    formData.append('image', uploadImage);
    formData.append('id_category', data.category);
    formData.append('nameProduct', data.nameProduct);
    formData.append('stock', data.stock);
    Array.from(data.productImage).forEach((image) => {
      formData.append('image', image);
    });
    formData.append('price', data.price);

    dispatch(showLoading(true));
    if (idProductUpdate) {
      Axios.post(`/products/${idProductUpdate}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          Toast('Success products updated', 'success');
          console.log(res);
          dispatch(showLoading(false));
          history.push('/admin/seller/products');
          return;
        })
        .catch((err) => {
          console.log(err.response);
          dispatch(showLoading(false));
          return Toast('Error', 'error');
        });
    } else {
      Axios.post(`/products`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          Toast('Success products Added', 'success');
          console.log(res);
          dispatch(showLoading(false));
          history.push('/admin/seller/products');
        })
        .catch((err) => {
          console.log(err.response);
          dispatch(showLoading(false));
          return Toast('Error', 'error');
        });
    }
  };

  return (
    <>
      <UserProfilePage session="seller" dataUser={userState}>
        <Formik
          initialValues={{
            name: '',
            price: '',
            stock: '',
            category: '',
          }}
          validationSchema={validationForm}
          onSubmit={(values) => {
            const dataProduct = {
              ...values,
              description,
              image: uploadImage,
              color: selectedColor,
            };
            console.log('formik submit', dataProduct);
            dispatch(addProduct(dataProduct, token, history));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
          }) => (
            <form onSubmit={handleSubmit}>
              <Main heading="Inventory" className="inventory-wrapper">
                <div className="form-wrapper">
                  <label htmlFor="name-product">
                    <Text color="secondary" as="lg">
                      Name of goods
                    </Text>
                  </label>
                  <div className="input-wrapper">
                    <FormInput
                      type="text"
                      name="name"
                      placeholder="Product Name"
                      className="input"
                      // defaultValue={currentValue.nameProduct}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name && (
                      <AlertValidationForm message={errors.name} />
                    )}
                  </div>
                </div>
              </Main>
              <Main heading="Item Details" className="item-details">
                <div className="form-wrapper">
                  <label htmlFor="price">
                    <Text color="secondary" as="lg">
                      Unit price
                    </Text>
                  </label>
                  <div className="input-wrapper">
                    <FormInput
                      type="text"
                      name="price"
                      className="input"
                      placeholder="Price"
                      defaultValue={currentValue.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                  </div>
                  {errors.price && touched.price && errors.price && (
                    <AlertValidationForm message={errors.price} />
                  )}
                </div>
                <div className="form-wrapper">
                  <label htmlFor="quantity">
                    <Text color="secondary" as="lg">
                      Stock
                    </Text>
                  </label>
                  <div className="input-wrapper">
                    <FormInput
                      type="text"
                      name="stock"
                      className="input"
                      defaultValue={currentValue.stock}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.stock}
                    />
                  </div>
                  {errors.stock && touched.stock && errors.stock && (
                    <AlertValidationForm message={errors.stock} />
                  )}
                </div>
                <div className="form-wrapper">
                  <label htmlFor="quantity">
                    <Text color="secondary" as="lg">
                      Category
                    </Text>
                  </label>
                  <div className="input-wrapper">
                    <FormControl variant="outlined" className="form-select">
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name="category"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {category &&
                          category.map((item) => {
                            return (
                              <MenuItem value={item.id}>
                                {item.nameCategory}
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </div>
                  {errors.category && touched.category && errors.category && (
                    <AlertValidationForm message={errors.category} />
                  )}
                </div>

                <div className="form-wrapper selected">
                  <label htmlFor="quantity">
                    <Text color="secondary" as="lg">
                      Color
                    </Text>
                  </label>
                  <ChooseColor>
                    <div
                      className={`box red ${size.red && 'selected'}`}
                      onClick={(e) => handleColors({ value: 'red' })}
                    >
                      <p>red</p>
                    </div>
                    <div
                      className={`box blue ${size.blue && 'selected'}`}
                      onClick={(e) => handleColors({ value: 'blue' })}
                    >
                      <p>blue</p>
                    </div>
                    <div
                      className={`box orange ${size.orange && 'selected'}`}
                      onClick={(e) => handleColors({ value: 'orange' })}
                    >
                      <p>orange</p>
                    </div>
                    <div
                      className={`box pink ${size.pink && 'selected'}`}
                      onClick={(e) => handleColors({ value: 'pink' })}
                    >
                      <p>pink</p>
                    </div>
                    <div
                      className={`box yellow ${size.yellow && 'selected'}`}
                      onClick={(e) => handleColors({ value: 'yellow' })}
                    >
                      <p>yellow</p>
                    </div>
                  </ChooseColor>
                </div>
              </Main>
              <Main heading="Photo of Goods" className="photos">
                <div className="photo-wrapper">
                  {previewAvatar.length > 0 &&
                    previewAvatar.map((image) => (
                      <>
                        <div className="photo">
                          {/* <div className="remove-image">
                            <CancelIcon />
                          </div> */}
                          <img src={image} alt="goods" />
                        </div>
                      </>
                    ))}
                  {!previewAvatar.length && (
                    <>
                      <div className="photo">
                        <img src={ICImgNull} alt="goods" />
                      </div>
                    </>
                  )}
                </div>
                <Divider className="divider" />
                <InputImageProduct className="btn-wrapper">
                  <div className="btn">
                    <div className="btn-input">Upload Photo</div>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleInputImageProduct(e)}
                      // {...register('productImage')}
                    />
                  </div>
                </InputImageProduct>
              </Main>
              <Main heading="Description">
                <CKEditor
                  editor={ClassicEditor}
                  data={currentValue.description}
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // console.log('Editor is ready to use!', editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                  }}
                  onBlur={(event, editor) => {
                    // console.log('Blur.', editor);
                  }}
                  onFocus={(event, editor) => {
                    // console.log('Focus.', editor);
                  }}
                />
              </Main>
              <ButtonWrapper>
                {/* {!idProductUpdate && (
                  <Button
                    className="btn"
                    primary
                    type="submit"
                    disabled={
                      !isValid ||
                      (Object.keys(touched).length === 0 &&
                        touched.constructor === Object)
                    }
                  >
                    Jual
                  </Button>
                )} */}
                <Button
                  className="btn"
                  primary
                  type="submit"
                  disabled={
                    !isValid ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                >
                  {idProductUpdate ? 'UPDATE' : 'SELL'}
                </Button>
              </ButtonWrapper>
            </form>
          )}
        </Formik>
      </UserProfilePage>
    </>
  );
};

export default SellerSellingProducts;

// STYLING

const ButtonWrapper = styled.div`
  width: 80%;
  ${customMedia.lessThan('1300px')`
    width: 90%; 
  `}
  ${customMedia.lessThan('1000px')`
    width: 100%; 
  `}
  margin-top: 32px;
  text-align: right;
  .btn {
    width: 150px;
  }
`;

// Internal Styling : input url photo
const InputImageProduct = styled.div`
  .btn {
    position: relative;
    max-width: 250px;
    input {
      display: flex;
      width: 150px;
      height: 150px;
      position: absolute;
      right: 0;
      top: 0;
      opacity: 0;
    }
  }
`;

const ChooseColor = styled.div`
  display: flex;
  gap: 1rem;
  .box {
    border: 1px solid #9b9b9b;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      display: none;
    }

    &:hover {
      cursor: pointer;
      border: 0;
    }
    &.selected {
      border: 2px solid #222222;
    }
  }

  .red {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }
  .orange {
    background-color: orange;
  }
  .pink {
    background-color: pink;
  }
  .yellow {
    background-color: yellow;
  }
`;
