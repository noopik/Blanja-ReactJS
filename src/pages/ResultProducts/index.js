import React, { useEffect, useState } from 'react';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  Breadcrumbs,
  CardGrouping,
  CheckoutDetail,
  Footer,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { CardProduct, CardWrapper } from '../../components/atoms';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { Axios } from '../../config';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Heading } from '../../components/atoms/Typography';

const ResultProducts = () => {
  const [dataProducts, setdataProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  // const params = useParams();
  const history = useHistory();
  const searchKeyword = history.location.state;
  const querySearch = `${history.location.pathname}${history.location.search}`;
  // console.log(history);
  // const { src } = params;
  // console.log(location);

  // State Manegement

  useEffect(() => {
    document.title = 'Result Product';
    Axios.get(querySearch)
      .then((res) => {
        const response = res.data;
        const resData = response.data;
        setdataProducts(resData);
        // console.log(resData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // console.log('dataProducts', dataProducts);

  return (
    <>
      <Navbar session="user" />
      <MainContent className="category-page">
        <SectionContent>
          <HeaderSection
            title={`Menampilkan hasil pencarian: ${searchKeyword}`}
          />
          <CardGrouping>
            {dataProducts && (
              <Item>
                <CardProduct />
              </Item>
            )}
          </CardGrouping>
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default ResultProducts;
