import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import { ProductCategory } from '../../../assets/images';
import 'react-alice-carousel/lib/alice-carousel.css';
import { ImageGaleryProduct } from '../../../components/molecules';
import { Heading, Text } from '../../../components/atoms/Typography';
import { Button, Counter, Loader, StarRating } from '../../../components/atoms';
import NumberFormat from 'react-number-format';
import { customMedia } from '../../../components/Layouts';

const HeaderPage = ({ data }) => {
  const [dataProduct, setDataProduct] = useState({});

  useEffect(() => {
    setDataProduct(data);
  }, [data]);

  return (
    <Main>
      <div className="image-content"></div>
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
            <Counter />
          </div>
          <div>
            <Text as="lg" font="medium">
              Jumlah
            </Text>
            <Counter />
          </div>
        </div>
        <div className="d-flex">
          <Button className="btn-mini">Chat</Button>
          <Button className="btn-mini">Add Bag</Button>
          <Button primary className="btn-main">
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
    /* for screen sizes less than 1280px */
    height: 500px;

  `}

  aside {
    /* background-color: pink; */
    width: 100%;
    margin-left: 2rem;

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
