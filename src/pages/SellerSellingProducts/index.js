/* eslint-disable react-hooks/exhaustive-deps */
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CancelIcon from '@material-ui/icons/Cancel';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
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
import { getItemProduct, showLoading } from '../../redux/actions';
import { patternNumber } from '../../utils';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const SellerSellingProducts = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector((state) => state.userReducer);
  const [description, setDescription] = useState('');
  const token = localStorage.getItem('token');
  const { exist, data: currentValue } = useSelector(
    (state) => state.productItemReducer
  );
  console.log(exist);
  // UPDATE PRODUCTS
  const idProductUpdate = history.location.state?.id;
  // console.log(idProductUpdate);

  // HANDLE FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    getValues,
  } = useForm();

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
  const [uploadImage, setUploadImage] = useState([]);
  const [previewAvatar, setPreviewAvatar] = useState([]);

  const handleInputImageProduct = async () => {
    try {
      const getImage = getValues('productImage');
      setUploadImage(getImage);
    } catch (error) {
      // console.log(error);
    }
  };
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
    handleInputImageProduct();
    handlePreview();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('productImage'), uploadImage]);

  // SELECT COLOR
  const [size, setSize] = useState({
    red: false,
    blue: false,
    orange: false,
    pink: false,
    yellow: false,
  });
  const [selectedColor, setSelectedColor] = useState();

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                  name="nameProduct"
                  placeholder="Product Name"
                  className="input"
                  defaultValue={currentValue.nameProduct}
                  {...register('nameProduct', { required: true })}
                />
                {errors.nameProduct && (
                  <AlertValidationForm
                    className="input"
                    message="Required name"
                  />
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
                  {...register('price', {
                    required: true,
                    pattern: {
                      value: patternNumber,
                    },
                  })}
                />
              </div>
              {errors.price && (
                <AlertValidationForm
                  className="input"
                  message="Value must be numbers!"
                />
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
                  {...register('stock', {
                    required: true,
                    pattern: {
                      value: patternNumber,
                    },
                  })}
                />
              </div>
              {errors.stock && (
                <AlertValidationForm
                  className="input"
                  message="Value must be numbers!"
                />
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
                    name="id_category"
                    {...register('category', {
                      required: true,
                    })}
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
              {errors.category && (
                <AlertValidationForm
                  className="input"
                  message="Choose minimal one category!"
                />
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
                      <div className="remove-image">
                        <CancelIcon />
                      </div>
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
                  onChange={handleInputImageProduct}
                  {...register('productImage')}
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
            {!idProductUpdate && (
              <Button className="btn" primary type="submit">
                Jual
              </Button>
            )}
            {idProductUpdate && (
              <Button className="btn" primary type="submit">
                UPDATE
              </Button>
            )}
          </ButtonWrapper>
        </form>
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
