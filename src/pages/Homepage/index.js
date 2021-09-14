/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Axios } from '../../../src/config';
import { CardProduct, Loader } from '../../components/atoms';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  CardGrouping,
  Carousel,
  CarouselCategory,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { Item } from '../../components/molecules/CardGrouping/styled';
import Footer from '../../components/molecules/Footer';
import { getAllProducts, showLoading } from '../../redux/actions';
import { typeRedux } from '../../utils';

const Homepage = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const token = localStorage.getItem('token');
  // const history = useHistory();
  const dispatch = useDispatch();
  const allProductsState = useSelector((state) => state.productReducer);
  const { isShow: loadingState } = useSelector((state) => state.loadingReducer);

  useEffect(() => {
    document.title = 'Blanja | Homepage';
  });

  useEffect(() => {}, []);

  // DATA FOR NEW PRODUCTS SECTION
  useEffect(() => {
    dispatch(getAllProducts(10));
  }, []);

  // DATA FOR POPULAR PRODUCTS SECTION
  useEffect(() => {
    dispatch(showLoading(true));
    Axios.get('/products?page=2&limit=10')
      .then((result) => {
        const resData = result.data.data;
        setPopularProducts(resData);
        dispatch(showLoading(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(showLoading(false));
      });
  }, []);

  // Action Card Choose

  return (
    <>
      <Navbar session={token ? 'user' : 'public'} />
      <MainContent>
        <Carousel className="carousel" />
        <SectionContent className="section">
          <HeaderSection
            title="Category"
            subTitle="What are you currently looking for"
          />
          <CarouselCategory className="carousel" />
        </SectionContent>
        <SectionContent className="section">
          <HeaderSection title="New" subTitle="You’ve never seen it before!" />
          <CardGrouping>
            {allProductsState.exist &&
              allProductsState?.data.map((item) => (
                // <Item key={item.id}>
                <CardProduct
                  key={item.id}
                  title={item.nameProduct}
                  image={item.imageProduct}
                  price={item.price}
                  store="Zalora"
                  idProduct={item.id}
                  className="item"
                />
                // </Item>
              ))}
            {!allProductsState.exist && <Loader line />}
          </CardGrouping>
        </SectionContent>
        <SectionContent className="section">
          <HeaderSection
            title="Popular"
            subTitle="Find clothes that are trending recently"
          />
          <CardGrouping>
            {!loadingState &&
              popularProducts.map((item) => (
                <Item key={item.id}>
                  <CardProduct
                    title={item.nameProduct}
                    image={item.imageProduct}
                    price={item.price}
                    idProduct={item.id}
                    store="Zalora"
                    className="item"
                  />
                </Item>
              ))}
            {loadingState && <p>Loading</p>}
          </CardGrouping>
        </SectionContent>
      </MainContent>

      <Footer />
    </>
  );
};

export default Homepage;
