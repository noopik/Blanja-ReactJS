import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { typeRedux } from '../../utils';

const MyBag = () => {
  const { productChoose } = useSelector((state) => state.cartProductReducer);
  const dispatch = useDispatch();

  // console.log('cartReducer', productChoose);
  useEffect(() => {
    document.title = 'Blanja | My Bag';
  });

  const counterTotal = (value) => {
    // console.log(value);
    const sendData = {
      price: productChoose.price,
      total: value,
    };

    dispatch({
      type: typeRedux.setChooseProductCount,
      value: sendData,
    });
  };

  return (
    <>
      <Navbar session="user" />
      <MainContent>
        {productChoose.length > 0 &&
          productChoose.map((product) => (
            <SectionContent>
              <HeaderSection title="My Bag" />
              <AsideContent>
                <AsideLeft className="left">
                  <CheckoutDetail heading totalProduct={productChoose.length} />
                  <CheckoutDetail
                    body
                    nameProduct={product.nameProduct}
                    store="IStanbul"
                    total={product.price}
                    counterTotal={counterTotal}
                    image={product.imageProduct[0]}
                  />
                </AsideLeft>
                <AsideRight className="right">
                  <CardCheckout myBag />
                </AsideRight>
              </AsideContent>
            </SectionContent>
          ))}
        {!productChoose.length && <h1>Null</h1>}
      </MainContent>
    </>
  );
};

export default MyBag;
