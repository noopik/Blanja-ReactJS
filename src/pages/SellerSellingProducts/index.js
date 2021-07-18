import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICImgNull } from '../../assets/Icons';
import { Button, Divider, FormInput } from '../../components/atoms';
import { Text } from '../../components/atoms/Typography';
import { TextEditor } from '../../components/molecules';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';
import { Axios } from '../../../src/config';
import { useParams } from 'react-router-dom';

const SellerSellingProducts = () => {
  const [isLoading, seIsLoading] = useState(false);
  const { slug } = useParams();
  const [form, setForm] = useState({
    nameProduct: '',
    price: '',
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
  }, []);
  // console.log('form', form);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = () => {
    seIsLoading(true);
    Axios.post('/products/add', form)
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

  return (
    <>
      <UserProfilePage
        userName="Seller Diana | Selling Products"
        session="seller"
      >
        <Main heading="Inventory" className="inventory-wrapper">
          <label htmlFor="name-product">
            <Text color="secondary" as="lg">
              Name of goods
            </Text>
          </label>
          <FormInput
            type="text"
            name="nameProduct"
            onChange={(e) => handleForm(e)}
            value={form.nameProduct}
          />
        </Main>
        <Main heading="Item Details" className="item-details">
          <div className="form-wrapper">
            <label htmlFor="price">
              <Text color="secondary" as="lg">
                Unit price
              </Text>
            </label>
            <FormInput
              type="text"
              name="price"
              onChange={(e) => handleForm(e)}
              value={form.price}
            />
          </div>
          <div className="form-wrapper">
            <label htmlFor="quantity">
              <Text color="secondary" as="lg">
                Stock
              </Text>
            </label>
            <FormInput
              type="text"
              name="stock"
              onChange={(e) => handleForm(e)}
              value={form.stock}
            />
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
          <FormInput
            type="text"
            name="imageProduct"
            onChange={(e) => handleForm(e)}
            value={form.imageProduct}
          />
          <Divider className="divider" />
          <div className="btn-wrapper">
            <Button className="btn">Upload Photo</Button>
          </div>
        </Main>
        <Main heading="Description">
          <TextEditor />
          <FormInput
            type="text"
            name="description"
            onChange={(e) => handleForm(e)}
            value={form.description}
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

const ButtonWrapper = styled.div`
  width: 80%;
  margin-top: 32px;
  text-align: right;
  .btn {
    width: 150px;
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
