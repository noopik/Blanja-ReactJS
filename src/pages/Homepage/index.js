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
import { CardProduct } from '../../components/atoms';
import { Axios } from '../../../src/config';

const Homepage = () => {
  const [newProducts, setNewProducts] = useState([{}]);
  const [popularProducts, setPopularProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Blanja | Homepage';
  });

  // DATA FOR NEW PRODUCTS SECTION
  useEffect(() => {
    setIsLoading(true);
    Axios.get('/products?limit=10')
      .then((result) => {
        const resData = result.data.data;
        setNewProducts(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  // console.log(newProducts);
  // DATA FOR POPULAR PRODUCTS SECTION
  useEffect(() => {
    setIsLoading(true);
    Axios.get('/products?page=2&limit=10')
      .then((result) => {
        const resData = result.data.data;
        setPopularProducts(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
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
            {!isLoading &&
              newProducts.map((item) => (
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
            {isLoading && <p>Loading</p>}
          </CardGrouping>
        </SectionContent>
        <SectionContent className="section">
          <HeaderSection
            title="Popular"
            subTitle="Find clothes that are trending recently"
          />
          <CardGrouping>
            {!isLoading &&
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
            {isLoading && <p>Loading</p>}
          </CardGrouping>
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default Homepage;
