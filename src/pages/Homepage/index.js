import React, { useEffect, useState } from 'react';
import {
  CardGrouping,
  Carousel,
  CarouselCategory,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { MainContent, SectionContent } from '../../components/Layouts';
import Footer from '../../components/molecules/Footer';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { CardProduct, Loader } from '../../components/atoms';
import { Axios } from '../../../src/config';
import { useDispatch, useSelector } from 'react-redux';
import { typeRedux } from '../../utils';
import {
  getAllProducts,
  getItemProduct,
  showLoading,
} from '../../redux/actions';
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const token = localStorage.getItem('token');
  const history = useHistory();
  const dispatch = useDispatch();
  const allProductsState = useSelector((state) => state.allProductReducer);
  const { isShow: loadingState } = useSelector((state) => state.loadingReducer);

  useEffect(() => {
    document.title = 'Blanja | Homepage';
  });

  // CHECK IS USER LOGIN EXIST OR NOT
  Axios.get(`/users/verify-token`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((result) => {
    const dataResult = result.data.data;
    dispatch({ type: typeRedux.setUserLogin, value: dataResult });
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
