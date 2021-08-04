import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductCategory1 } from '../../assets/images';
import { AsideLeft, AsideRight } from '../../components/atoms';
import {
  AsideContent,
  MainContent,
  SectionContent,
} from '../../components/Layouts';
import {
  CardCheckout,
  CheckoutDetail,
  HeaderSection,
  Navbar,
} from '../../components/molecules';

const MyBag = () => {
  const cartReducer = useSelector((state) => state.cartProductReducer);
  // console.log('cartReducer', cartReducer.productChoose.length);
  useEffect(() => {
    document.title = 'Blanja | My Bag';
  });
  const counterTotal = (value) => {
    console.log(value);
    // const sendData = {
    //   price: 10000,
    //   total: value,
    // };
    // dispatch({
    //   type: typeRedux.setChooseProductCount,
    //   value: sendData,
    // });
  };
  return (
    <>
      <Navbar session="user" />
      <MainContent>
        {cartReducer.productChoose.length > 0 && (
          <SectionContent>
            <HeaderSection title="My Bag" />
            <AsideContent>
              <AsideLeft className="left">
                <CheckoutDetail heading />
                <CheckoutDetail
                  body
                  nameProduct="Baju"
                  store="IStanbul"
                  total={25}
                  counterTotal={counterTotal}
                  image={ProductCategory1}
                />
              </AsideLeft>
              <AsideRight className="right">
                <CardCheckout myBag />
              </AsideRight>
            </AsideContent>
          </SectionContent>
        )}
        {!cartReducer.productChoose.length && <h1>Null</h1>}
      </MainContent>
    </>
  );
};

export default MyBag;
