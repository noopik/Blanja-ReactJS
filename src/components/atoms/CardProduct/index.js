import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, BodyProduct } from './styled';
import StarRating from '../StarRating';
import NumberFormat from 'react-number-format';

const CardProduct = ({
  className,
  to,
  title,
  price,
  store,
  image,
  idProduct,
}) => {
  const [slug, setSlug] = useState('');
  const [titleProduct, setTitleProduct] = useState('');

  const slugUrl = () => {
    let slug = title;
    const split = slug.split(' ');
    const stringNameProduct = split.join('').toLowerCase();
    const urlDetail = `${stringNameProduct}-${idProduct}`;
    // id to string
    setSlug(urlDetail);
  };

  const headingCard = () => {
    const heading = title;
    const split = heading.split(' ');
    let main = `${split[0]} ${split[1]} ${split[2]}`;
    setTitleProduct(main);
  };

  useEffect(() => {
    if (title) {
      slugUrl();
      headingCard();
    }
  }, [title]);

  return (
    <Link to={`/product/${slug}`} className="anchor">
      <Card className={className}>
        <img className="image-product" src={image} alt={title} />
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
    </Link>
  );
};

export default CardProduct;
