/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { DMNullImage } from '../../../assets/images';
import { getItemProduct } from '../../../redux/actions';
import StarRating from '../StarRating';
import { BodyProduct, Card } from './styled';

const CardProduct = ({
  className,
  to,
  title,
  price,
  store,
  image,
  idProduct,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const [slug, setSlug] = useState('');
  const [titleProduct, setTitleProduct] = useState('');
  const token = localStorage.getItem('token');

  const slugUrl = () => {
    // let slug = title;
    // const split = slug.split(' ');
    // const stringNameProduct = split.join('').toLowerCase();
    // const urlDetail = `${stringNameProduct}-${idProduct}`;
    // id to string
    // setSlug(urlDetail);
  };

  const headingCard = () => {
    const heading = title;
    const split = heading.split(' ');
    let main = `${split[0]}`;

    if (split[1]) {
      main += ` ${split[1]}`;
    }
    if (split[2]) {
      main += ` ${split[2]}`;
    }
    setTitleProduct(main);
  };

  useEffect(() => {
    if (title) {
      slugUrl();
      headingCard();
    }
  }, [title]);

  const actionCard = () => {
    // console.log(1213, id);
    dispatch(getItemProduct(idProduct, token));
    history.push(`/products/${idProduct}`);
  };

  return (
    <div onClick={actionCard}>
      <Card className={className}>
        <div className="image-wrapper">
          <img
            className="image-product"
            src={image ? image : DMNullImage}
            alt={title}
          />
        </div>
        <BodyProduct>
          <h3 className="title">{titleProduct}</h3>
          <NumberFormat
            value={price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp. '}
            className="price"
          />
          <p className="store">{store}</p>
          <StarRating />
        </BodyProduct>
      </Card>
    </div>
  );
};

export default CardProduct;
