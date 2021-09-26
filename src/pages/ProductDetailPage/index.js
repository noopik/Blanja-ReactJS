/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { CardProduct, Loader } from '../../components/atoms';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  Breadcrumbs,
  CardGrouping,
  Footer,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { getItemProduct } from '../../redux/actions';
import { DetailProduct, HeaderProductPage } from './styled';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  // const { exist, data } = useSelector((state) => state.productItemReducer);
  const token = localStorage.getItem('token');
  const allProductsState = useSelector((state) => state.productReducer);

  // console.log('itemProductState', data);

  useEffect(() => {
    getItemProduct(id, token, (data) => {
      setProduct(data);
    });
  }, [id]);

  useEffect(() => {
    document.title = product ? product.nameProduct : 'Detail Product...';
  });

  return (
    <>
      <Navbar session={token ? 'user' : 'public'} />
      <MainContent>
        {product && (
          <>
            <SectionContent>
              <Breadcrumbs data={product} title={product.id_category} />
              <HeaderProductPage data={product} />
              <DetailProduct data={product} />
            </SectionContent>
          </>
        )}

        <SectionContent className="section">
          <HeaderSection title="New" subTitle="You’ve never seen it before!" />
          <CardGrouping>
            {allProductsState.exist &&
              allProductsState?.data.map((item) => (
                <Item key={item.id}>
                  <CardProduct
                    title={item.nameProduct}
                    image={item.imageProduct}
                    price={item.price}
                    store="Zalora"
                    idProduct={item.id}
                  />
                </Item>
              ))}
            {!allProductsState.exist && <Loader line />}
          </CardGrouping>
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default ProductDetail;
