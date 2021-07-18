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
import styled from 'styled-components';
import PageviewIcon from '@material-ui/icons/Pageview';
import FilterListIcon from '@material-ui/icons/FilterList';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';

const ResultProducts = () => {
  const [dataProducts, setdataProducts] = useState([{}]);
  const [metaDataProducts, setMetaDataProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [sortPrice, setSortPrice] = useState('ASC');
  // const params = useParams();
  const history = useHistory();
  const searchKeyword = history.location.state;
  const querySearch = `${history.location.pathname}${history.location.search}&limit=10`;
  // console.log(history);
  // const { src } = params;
  // console.log(location);

  // State Manegement

  useEffect(() => {
    document.title = 'Result Product';
    Axios.get(querySearch)
      .then((res) => {
        const response = res.data;
        // console.log('response', response);
        const resData = response.data;
        setdataProducts(resData);
        setMetaDataProducts(response);
        console.log(resData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // console.log('dataProducts', dataProducts);
  console.log('metaDataProducts', metaDataProducts);

  // FILTER BUTTON PRICE
  console.log(`${querySearch}=field=price&sort=ASC`);
  const handleFilter = () => {
    let sortBy = sortPrice === 'ASC' ? 'DESC' : 'ASC';
    setSortPrice(sortBy);
    // console.log('filter run');
    Axios.get(`${querySearch}&field=price&sort=${sortBy}`)
      .then((res) => {
        const response = res.data;
        setMetaDataProducts(response);
        const resData = response.data;
        setdataProducts(resData);
        // console.log(resData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar session="user" />
      <MainContent className="category-page">
        <SectionContent>
          <HeaderSection
            title={`Menampilkan hasil pencarian: ${searchKeyword}`}
          />
          <InfoResult>
            <div className="item-info">
              <PageviewIcon color="disabled" />
              {metaDataProducts && (
                <p>
                  Menampilkan {metaDataProducts.meta.limit} hasil pencarian (
                  {metaDataProducts.meta.totalData} total data)
                </p>
              )}
            </div>
            <div className="item-info sort" onClick={handleFilter}>
              <FilterListIcon
                className={sortPrice === 'ASC' ? 'icon-filter' : ''}
                color="disabled"
              />
              <p>Harga Terendah</p>
            </div>
          </InfoResult>
          <CardGrouping>
            {dataProducts &&
              dataProducts.map((item) => {
                return (
                  <Item>
                    <CardProduct
                      title={item.nameProduct}
                      image={item.imageProduct}
                      price={item.price}
                      store="Zalora"
                      idProduct={item.id}
                    />
                  </Item>
                );
              })}
          </CardGrouping>
          {/* <Pagination count={10} shape="rounded" /> */}
          {/* <PaginationWrapper>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </PaginationWrapper> */}
        </SectionContent>
      </MainContent>
      <Footer />
    </>
  );
};

export default ResultProducts;

const InfoResult = styled.div`
  display: flex;
  gap: 2rem;
  .item-info {
    display: flex;
    gap: 1rem;
    p {
      margin: 0;
      color: #9b9b9b;
    }
    .icon-filter {
      transform: rotate(180deg);
    }
    &.sort:hover {
      cursor: pointer;
      color: #222222;
      p {
        color: #222222;
      }
    }
  }
`;

const PaginationWrapper = styled.div`
  background-color: yellow;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;
