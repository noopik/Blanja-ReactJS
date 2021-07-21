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
import { useHistory } from 'react-router-dom';

const CategoryPage = () => {
  const [dataProducts, setdataProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryItem, setCategoryItem] = useState([]);

  const history = useHistory();
  const pathname = history.location.pathname;
  const categoryId = pathname.split('/').pop();

  useEffect(() => {
    document.title = 'Blanja | T-Shirt';
  });
  // DATA FOR NEW PRODUCTS SECTION
  useEffect(() => {
    setIsLoading(true);
    Axios.get(`/category/${categoryId}`)
      .then((res) => {
        const resData = res.data.data[0];
        console.log(resData);

        setCategoryItem(resData);
        Axios.get(`/products?category=${resData.nameCategory}`)
          .then((result) => {
            const resData = result.data.data;
            setdataProducts(resData);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <Navbar session="user" />
      <MainContent className="category-page">
        <SectionContent>
          <Breadcrumbs
            className="breadcrumbs"
            active="category"
            data={categoryItem}
          />
          <HeaderSection title={categoryItem.nameCategory} />
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
