import React, { useEffect, useState } from 'react';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  Breadcrumbs,
  CardGrouping,
  Footer,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { CardProduct } from '../../components/atoms';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { Axios } from '../../../src/config';

const CategoryPage = () => {
  const [dataProducts, setdataProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Blanja | T-Shirt';
  });
  // DATA FOR NEW PRODUCTS SECTION
  useEffect(() => {
    setIsLoading(true);
    Axios.get('/products?limit=20')
      .then((result) => {
        const resData = result.data.data;
        setdataProducts(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar session="user" />
      <MainContent className="category-page">
        <SectionContent>
          <Breadcrumbs className="breadcrumbs" active="category" />
          <HeaderSection title="T-Shirt" />
          <CardGrouping>
            {!isLoading &&
              dataProducts.map((item) => (
                <Item key={item.id}>
                  <CardProduct
                    title={item.nameProduct}
                    image={item.imageProduct}
                    price={item.price}
                    idProduct={item.id}
                    store="Zalora"
                  />
                </Item>
              ))}
            {isLoading && <p>Loading</p>}
          </CardGrouping>
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default CategoryPage;
