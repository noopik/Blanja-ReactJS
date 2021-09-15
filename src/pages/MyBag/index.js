import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  const cartState = useSelector((state) => state.cartReducer);
  // const cartProductState = useSelector((state) => state.cartProductReducer);
  // const [selected, setSelected] = useState({
  //   idProduct: '',
  //   isChecked: false,
  // });
  // const [dataSelected, setDataSelected] = useState([]);

  // const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Blanja | My Bag';
  });

  const counterTotal = (value) => {
    // const sendData = {
    //   price: productChoose.price,
    //   total: value,
    // };
    // dispatch({
    //   type: typeRedux.setChooseProductCount,
    //   value: sendData,
    // });
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
  // console.log('dataSelected', dataSelected);

  const actionDelete = () => {
    // console.log(selected);
  };
  console.log('cartState', cartState);

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
                // totalProduct={productChoose ? productChoose.length : 0}
                clickDelete={actionDelete}
              />
              {cartState?.data &&
                cartState.data.map((product, index) => (
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
              <CardCheckout myBag pricing={cartState?.pricing} />
            </AsideRight>
          </AsideContent>
        </SectionContent>
      </MainContent>
    </>
  );
};

export default MyBag;
