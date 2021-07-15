import React from 'react';
import { Link } from 'react-router-dom';
import { Card, BodyProduct } from './styled';
import { ProductCategory } from '../../../assets/images';
import { ICStar } from '../../../assets/Icons';
import StarRating from '../StarRating';

const CardProduct = ({ children, className, to, title }) => {
  return (
    <Link to={to} className="anchor">
      <Card className={className}>
        <img className="image-product" src={ProductCategory} alt={title} />
        <BodyProduct>
          <h3 className="title">Men's formal suit - Black & White</h3>
          <p className="price">$ 40.0</p>
          <p className="store">Xalora</p>
          <StarRating />
        </BodyProduct>
      </Card>
    </Link>
  );
};

export default CardProduct;
