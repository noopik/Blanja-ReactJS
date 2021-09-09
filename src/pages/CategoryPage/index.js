/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  Breadcrumbs,
  CardGrouping,
  Footer,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { CardProduct, Loader } from '../../components/atoms';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { Axios } from '../../../src/config';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoading } from '../../redux/actions';

const CategoryPage = () => {
  const [dataProducts, setdataProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);
  const [categoryItem, setCategoryItem] = useState([]);
  const token = localStorage.getItem('token');

  const history = useHistory();
  const dispatch = useDispatch();
  const pathname = history.location.pathname;
  const categoryId = pathname.split('/').pop();

  useEffect(() => {
    document.title = 'Blanja | T-Shirt';
  });

  // DATA FOR NEW PRODUCTS SECTION
  useEffect(() => {
    dispatch(showLoading(true));
    Axios.get(`/category/${categoryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        const resData = res.data.data[0];
        // console.log(resData);

        setCategoryItem(resData);
        Axios.get(`/products?category=${resData.nameCategory}`)
          .then((result) => {
            const resData = result.data.data;
            setdataProducts(resData);
            dispatch(showLoading(false));
          })
          .catch((err) => {
            console.log(err);
            dispatch(showLoading(false));
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
            {isLoading && <Loader line />}
          </CardGrouping>
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default CategoryPage;
