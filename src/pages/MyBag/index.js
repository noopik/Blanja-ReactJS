import React, { useEffect, useState } from 'react';
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
  const cartProductState = useSelector((state) => state.cartProductReducer);
  const [selected, setSelected] = useState({
    idProduct: '',
    isChecked: false,
  });
  const [dataSelected, setDataSelected] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Blanja | My Bag';
  });

  const counterTotal = (value) => {
    const sendData = {
      price: productChoose.price,
      total: value,
    };

    dispatch({
      type: typeRedux.setChooseProductCount,
      value: sendData,
    });
  };

  // console.log(cartProductState);
  const actionItemProduct = (id) => {
    // let status;
    // if (dataSelected) {
    //   status = dataSelected.find((item) => item.isChecked === id);
    //   setSelected({
    //     idProduct: status,
    //     isChecked: false,
    //   });
    // } else {
    //   setSelected({
    //     idProduct: id,
    //     isChecked: true,
    //   });
    // }
  };
  console.log('dataSelected', dataSelected);

  const actionDelete = () => {
    console.log(selected);
  };
  console.log('selected', selected);

  return (
    <>
      <Navbar session="user" />
      <MainContent>
        <SectionContent>
          <HeaderSection title="My Bag" />
          <AsideContent>
            <AsideLeft className="left">
              <CheckoutDetail
                heading
                totalProduct={productChoose ? productChoose.length : 0}
                clickDelete={actionDelete}
              />
              {productChoose &&
                productChoose.map((product, index) => (
                  <CheckoutDetail
                    body
                    nameProduct={product.nameProduct}
                    store="IStanbul"
                    total={product.price}
                    counterTotal={counterTotal}
                    image={product.imageProduct[0]}
                    defaultValue={product.totalChoose}
                    onClick={() => actionItemProduct(product.id)}
                  />
                ))}
            </AsideLeft>
            <AsideRight className="right">
              <CardCheckout myBag />
            </AsideRight>
          </AsideContent>
        </SectionContent>
      </MainContent>
    </>
  );
};

export default MyBag;
