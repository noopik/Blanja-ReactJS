import React, { useEffect, useState } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import NumberFormat from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Counter, Loader, StarRating } from '../../../components/atoms';
import { Heading, Text } from '../../../components/atoms/Typography';
import { customMedia } from '../../../components/Layouts';
import { ImageGaleryProduct } from '../../../components/molecules';
import { insertProductToCart } from '../../../redux/actions';
import { typeRedux } from '../../../utils';

const HeaderPage = ({ data }) => {
  const [dataProduct, setDataProduct] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const productItemState = useSelector((state) => state.productItemReducer);
  const chooseProductReducer = useSelector(
    (state) => state.chooseProductReducer
  );
  const cartProductState = useSelector((state) => state.cartProductReducer);

  // const [color, setColor] = useState({
  //   red: false,
  //   checkedB: false,
  //   checkedF: false,
  //   checkedG: false,
  // });

  useEffect(() => {
    setDataProduct(data);
    dispatch({
      type: typeRedux.setChooseProductId,
      value: data,
    });

    const pricing = {
      price: productItemState.data.price,
      totalChoose: 1,
    };

    dispatch({
      type: typeRedux.setChooseProductSize,
      value: 'XS',
    });
    dispatch({
      type: typeRedux.setChooseProductCount,
      value: pricing,
    });
  }, [data]);

  const handleActionBuy = () => {
    history.push('/checkout');
  };

  const counterSize = (value) => {
    // console.log(value);
    dispatch({
      type: typeRedux.setChooseProductSize,
      value: value,
    });
  };
  const counterTotal = (value) => {
    const pricing = {
      price: productItemState.data.price,
      totalChoose: value,
    };
    // console.log(123, pricing);

    dispatch({
      type: typeRedux.setChooseProductCount,
      value: pricing,
    });
  };

  // // Handle Selected Color
  // const handleColors = (e, change) => {};

  // Action Add Bag
  // console.log('productItemState', productItemState);
  const addProductToCart = () => {
    const oldCart = cartProductState.productChoose;
    let chooseProduct;
    let insertToCart;
    if (oldCart) {
      chooseProduct = {
        ...chooseProductReducer,
      };
      oldCart.push({ ...chooseProduct });
      insertToCart = {
        productChoose: oldCart,
      };
      dispatch({ type: typeRedux.setProductToCart, value: insertToCart });
      history.push('/my-bag');
    } else {
      chooseProduct = {
        ...chooseProductReducer,
      };

      insertToCart = {
        productChoose: [{ ...chooseProduct }],
      };

      dispatch({ type: typeRedux.setProductToCart, value: insertToCart });
      history.push('/my-bag');
    }
  };

  return (
    <Main>
      <ImageGaleryProduct images={dataProduct.imageProduct} />
      <aside>
        <Heading>
          {dataProduct.nameProduct ? dataProduct.nameProduct : <Loader line />}
        </Heading>
        <Text as="lg" color="secondary" className="rating">
          Zalora
        </Text>
        <StarRating />
        <Text as="lg" color="secondary" className="price">
          Price
        </Text>
        <Heading className="total-price">
          {dataProduct.price ? (
            <NumberFormat
              value={dataProduct.price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp. '}
              className="price"
            />
          ) : (
            <Loader line className="loader-price" />
          )}
        </Heading>
        <div className="check-wrapper">
          <Text as="lg" font="medium">
            Color
          </Text>
          <div className="btn-wrapper">
            <label class="container-check">
              <input type="checkbox" />
              <span class="checkmark bg-black"></span>
            </label>
            <label class="container-check">
              <input type="checkbox" />
              <span class="checkmark bg-white"></span>
            </label>
            <label class="container-check">
              <input type="checkbox" />
              <span class="checkmark bg-red"></span>
            </label>
            <label class="container-check">
              <input type="checkbox" />
              <span class="checkmark bg-brown"></span>
            </label>
            <label class="container-check">
              <input type="checkbox" />
              <span class="checkmark bg-caramel"></span>
            </label>
            <label class="container-check">
              <input type="checkbox" />
              <span class="checkmark bg-donker"></span>
            </label>
          </div>
        </div>
        <div className="counter-wrapper">
          <div>
            <Text as="lg" font="medium">
              Size
            </Text>
            <Counter size counterValue={counterSize} />
          </div>
          <div>
            <Text as="lg" font="medium">
              Jumlah
            </Text>
            <Counter counterValue={counterTotal} />
          </div>
        </div>
        <div className="d-flex">
          <Button className="btn-mini">Chat</Button>
          <Button className="btn-mini" onClick={addProductToCart}>
            Add Bag
          </Button>
          <Button primary className="btn-main" onClick={handleActionBuy}>
            Buy Now
          </Button>
        </div>
      </aside>
    </Main>
  );
};

export default HeaderPage;

const Main = styled.main`
  /* background-color: yellowgreen; */
  display: flex;
  margin-top: 32px;
  ${customMedia.lessThan('laptop')`
    height: max-content;
  `}
  ${customMedia.lessThan('872px')` 
  flex-direction: column;
  `} 
  /* flex-direction: column; */
  

  aside {
    /* background-color: pink; */
    width: 100%;
    margin-left: 2rem;
    ${customMedia.lessThan('872px')`
      margin-left: 0; 
      margin-top: 1rem; 
    `}

    .price {
      display: inline-block;
      margin-top: 1rem;
    }

    .total-price {
      margin-bottom: 20px;
      .loader-price {
        margin-top: 1rem;
      }
    }
    /* RATING */
    .rating {
      margin-top: 32px;
    }

    /* BUTTON PICK COLOR PRODUCT */
    .check-wrapper {
      /* display: flex; */
      /* justify-content: flex-start; */
      .btn-wrapper {
        width: max-content;
        display: flex;
        margin-top: 1rem;

        .container-check {
          display: block;
          position: relative;
          cursor: pointer;
          margin-right: 20px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            &:checked ~ .checkmark:after {
              display: flex;
              position: absolute;
              top: -4px;
              left: -4px;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              box-sizing: content-box;
              background: transparent;
              border: 2px solid #db3022;
            }
          }

          .checkmark {
            display: block;
            position: relative;
            top: 0;
            left: 0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            &:after {
              content: '';
              position: absolute;
              display: none;
            }
          }

          &:hover input ~ .checkmark {
            opacity: 0.5;
          }
        }
      }
      .bg-black {
        background-color: #020202;
      }

      .bg-white {
        background-color: #ffffff;
      }

      .bg-red {
        background-color: #b82222;
      }

      .bg-brown {
        background-color: #bea9a9;
      }

      .bg-caramel {
        background-color: #e2bb8d;
      }
    }

    /* COUNTER */
    .counter-wrapper {
      display: flex;
      gap: 32px;
      margin-top: 2rem;
      margin-bottom: 2.5rem;
    }

    /* BUTTON ACTION */
    .d-flex {
      ${customMedia.lessThan('laptop')`
        /* for screen sizes less than 1280px */ 
        display: flex;
        flex-direction: row; 
        flex-wrap: wrap; 
        gap: 1rem;
      `}
      .btn-mini {
        width: 160px;
        border: 1.5px solid #222222;
        box-sizing: border-box;
        border-radius: 24px;
        color: #222222;
        margin-right: 10px;
        ${customMedia.lessThan('890px')`
        width: 100%;
        margin-right: 0;

      `}
      }
      .btn-main {
        width: 343px;
        ${customMedia.lessThan('laptop')`
        /* for screen sizes less than 1280px */ 
        width: 350px; 
      `}
        ${customMedia.lessThan('890px')`
        /* for screen sizes less than 1280px */ 
        width: 100%;
      `}
      }
    }
  }
`;
