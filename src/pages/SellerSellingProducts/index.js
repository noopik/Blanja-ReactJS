import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICImgNull } from '../../assets/Icons';
import { Button, Divider, FormInput } from '../../components/atoms';
import { Text } from '../../components/atoms/Typography';
import { Modal, TextEditor } from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';
import { Axios } from '../../../src/config';
import { useHistory, useParams } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { customMedia } from '../../components/Layouts';

const SellerSellingProducts = () => {
  const [isLoading, seIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  // Upload Image
  const [uploadImage, setUploadImage] = useState('');

  const { slug } = useParams();
  const [form, setForm] = useState({
    nameProduct: '',
    price: '',
    id_category: '',
    stock: '',
    imageProduct: '',
    description: '',
  });

  const initialForm = {
    nameProduct: '',
    price: '',
    stock: '',
    imageProduct: '',
    description: '',
  };

  // console.log(slug);
  useEffect(() => {
    if (slug) {
      Axios.get(`/products/${slug}`)
        .then((res) => {
          const resData = res.data.data[0];
          // console.log('resData', resData);
          setForm(resData);
        })
        .catch((err) => {
          console.log(err);
        });
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
  }, []);
  // console.log(category);
  // console.log('form', form);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handlePhoto = (e) => {
    setUploadImage(e.target.value);
    setForm({
      ...form,
      imageProduct: e.target.value,
    });
  };

  const sendData = () => {
    console.log('form', form);
    seIsLoading(true);
    Axios.post('/products/add', form)
      .then((res) => {
        console.log(form);
        console.log('Upload success');
        setForm({ ...initialForm });
        setUploadImage('');
        seIsLoading(false);
        history.push('/admin/seller/products');
      })
      .catch((err) => {
        seIsLoading(false);
      });
  };

  const updateData = () => {
    seIsLoading(true);
    Axios.post(`/products/${slug}`, form)
      .then((res) => {
        console.log(form);
        console.log('Upload success');
        setForm({ ...initialForm });
        seIsLoading(false);
      })
      .catch((err) => {
        seIsLoading(false);
      });
  };

  // UPLOAD FOTO
  const showModalUploadPhoto = () => {
    dispatch({ type: 'SET_MODAL', value: true });
  };
  const uploadImageAction = () => {
    dispatch({ type: 'SET_MODAL', value: false });
    // setForm({ imageProduct: uploadImage });
  };
  // console.log('uploadImage', uploadImage);

  return (
    <>
      <UserProfilePage
        userName="Seller Diana | Selling Products"
        session="seller"
      >
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
                onChange={(e) => handleForm(e)}
                value={form.nameProduct}
                className="input"
              />
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
                onChange={(e) => handleForm(e)}
                value={form.price}
                className="input"
              />
            </div>
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
                onChange={(e) => handleForm(e)}
                value={form.stock}
                className="input"
              />
            </div>
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
                  value={form.id_category}
                  onChange={(e) => handleForm(e)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {category &&
                    category.map((item) => {
                      return (
                        <MenuItem value={item.id}>{item.nameCategory}</MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="form-wrapper selected">
            <label htmlFor="quantity">
              <Text color="secondary" as="lg">
                Stock
              </Text>
            </label>
            <div className="radio-wrapper">
              <div className="item-radio">
                <input type="radio" name="new" />
                <label htmlFor="new">Baru</label>
              </div>
              <div className="item-radio">
                <input type="radio" name="bekas" />
                <label htmlFor="bekas">Bekas</label>
              </div>
            </div>
          </div>
        </Main>
        <Main heading="Photo of Goods" className="photos">
          <div className="photo-wrapper">
            <div className="photo">
              <img src={uploadImage ? uploadImage : ICImgNull} />
            </div>
          </div>
          <Divider className="divider" />
          <div className="btn-wrapper">
            <Button className="btn" onClick={showModalUploadPhoto}>
              Upload Photo
            </Button>
          </div>
          <Modal header="Input URL Photo">
            {/* Internal Styling : input url photo */}
            <InputUrlPhoto>
              <FormInput
                className="input"
                name="imageProduct"
                onChange={(e) => handlePhoto(e)}
                value={uploadImage}
              />
              <Button primary className="btn" onClick={uploadImageAction}>
                Upload
              </Button>
            </InputUrlPhoto>
          </Modal>
        </Main>
        <Main heading="Description">
          <TextEditor />
          <FormInput
            type="text"
            name="description"
            onChange={(e) => handleForm(e)}
            value={form.description}
            className="input"
          />
        </Main>
        <ButtonWrapper>
          {!slug && (
            <Button className="btn" primary onClick={sendData}>
              Jual
            </Button>
          )}
          {slug && (
            <Button className="btn" primary onClick={updateData}>
              UPDATE
            </Button>
          )}
        </ButtonWrapper>
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
const InputUrlPhoto = styled.div`
  /* background-color: yellow; */
  width: 100%;
  .input {
    width: 100%;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
  }
`;

const UploadMultipleImage = (
  <div className="content-upload">
    <div className="img-wrapper">
      <div className="img-item">
        <div className="img">
          <img src={ICImgNull} />
        </div>
        <Text>Foto Utama</Text>
      </div>
      <div className="img-item">
        <div className="img">
          <img src={ICImgNull} />
        </div>
        <Text>Foto Utama</Text>
      </div>
      <div className="img-item">
        <div className="img">
          <img src={ICImgNull} />
        </div>
        <Text>Foto Utama</Text>
      </div>
      <div className="img-item">
        <div className="img">
          <img src={ICImgNull} />
        </div>
        <Text>Foto Utama</Text>
      </div>
    </div>
  </div>
);
