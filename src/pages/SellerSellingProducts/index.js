import React from 'react';
import styled from 'styled-components';
import { ICImgNull } from '../../assets/Icons';
import { Button, Divider, FormInput } from '../../components/atoms';
import { Text } from '../../components/atoms/Typography';
import UserProfilePage from '../UserProfile';
import { Main } from '../UserProfile/styled';

const SellerSellingProducts = () => {
  return (
    <>
      <UserProfilePage userName="Seller Diana | Selling Products">
        <Main heading="Inventory" className="inventory-wrapper">
          <label htmlFor="name-product">
            <Text color="secondary" as="lg">
              Name of goods
            </Text>
          </label>
          <FormInput type="text" name="name-product" />
        </Main>
        <Main heading="Item Details" className="item-details">
          <div className="form-wrapper">
            <label htmlFor="price">
              <Text color="secondary" as="lg">
                Unit price
              </Text>
            </label>
            <FormInput type="text" name="price" />
          </div>
          <div className="form-wrapper">
            <label htmlFor="quantity">
              <Text color="secondary" as="lg">
                Stock
              </Text>
            </label>
            <FormInput type="text" name="quantity" />
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
          <Divider className="divider" />
          <div className="btn-wrapper">
            <Button className="btn">Upload Photo</Button>
          </div>
        </Main>
        <Main heading="Description"></Main>
      </UserProfilePage>
    </>
  );
};

export default SellerSellingProducts;
