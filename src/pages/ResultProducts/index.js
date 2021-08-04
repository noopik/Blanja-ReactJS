import FilterListIcon from '@material-ui/icons/FilterList';
import PageviewIcon from '@material-ui/icons/Pageview';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CardProduct } from '../../components/atoms';
import { MainContent, SectionContent } from '../../components/Layouts';
import {
  CardGrouping,
  Footer,
  HeaderSection,
  Navbar,
} from '../../components/molecules';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { Axios } from '../../config';
import { typeRedux } from '../../utils';

const ResultProducts = () => {
  const [sortPrice, setSortPrice] = useState('ASC');
  const history = useHistory();
  const searchKeyword = history.location.state;

  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.searchReducer);
  console.log(searchState);

  useEffect(() => {
    document.title = 'Result Product';
  }, []);

  // FILTER BUTTON PRICE
  // console.log(`${querySearch}=field=price&sort=ASC`);
  const handleFilter = () => {
    let sortBy = sortPrice === 'ASC' ? 'DESC' : 'ASC';
    setSortPrice(sortBy);
    // console.log('filter run');
    Axios.get(`/products?src=${searchState.keyword}&field=price&sort=${sortBy}`)
      .then((res) => {
        if (res.data.statusCode === 200) {
          const sendState = {
            exist: true,
            keyword: searchState.keyword,
            result: {
              data: res.data.data,
              meta: res.data.meta,
            },
          };
          dispatch({ type: typeRedux.setSearching, value: sendState });
        }
        // setMetaDataProducts(response);
        // const resData = response.data;
        // setdataProducts(resData);
      })
      .catch((err) => {
        // console.log(err.response);
        if (err.response.data.statusCode === 404) {
          const sendState = {
            exist: false,
            keyword: searchState.keyword,
            message: err.response.data.error,
          };
          dispatch({ type: typeRedux.setSearching, value: sendState });
        }
      });
  };

  return (
    <>
      <Navbar session="user" />
      <MainContent className="category-page">
        {searchState.exist && (
          <SectionContent>
            <HeaderSection
              title={`Menampilkan hasil pencarian: ${searchKeyword}`}
            />
            <InfoResult>
              <div className="item-info">
                <PageviewIcon color="disabled" />
                <p>
                  Menampilkan {searchState.result.meta.limit} hasil pencarian (
                  {searchState.result.meta.totalData} total data)
                </p>
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
              {searchState.result.data.map((item) => {
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
        )}
        {!searchState.exist && <h1>Not found</h1>}
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

// const PaginationWrapper = styled.div`
//   background-color: yellow;
//   margin-top: 5rem;
//   display: flex;
//   justify-content: center;
// `;
