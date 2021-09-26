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
  HeaderSection,
  Navbar,
  PaginationRange,
} from '../../components/molecules';
import { Item } from '../../components/molecules/CardGrouping/styled';
import { Axios } from '../../config';
// import { getItemProduct } from '../../redux/actions';
import { typeRedux } from '../../utils';

const ResultProducts = () => {
  const [sortPrice, setSortPrice] = useState('ASC');
  const history = useHistory();
  const searchKeyword = history.location.state;
  // const token = localStorage.getItem('token');
  // const [resultSearching, setResultSearching] = useState([]);

  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.searchReducer);
  // console.log('resultSearching', resultSearching);

  useEffect(() => {
    document.title = 'Result Product';
  }, []);

  // useEffect(() => {
  //   Axios.get(`${pathname}${search}&limit=10`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((res) => {
  //       // console.log(res);
  //       const data = res.data;

  //       setResultSearching(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //       if (err.response.status === 404) {
  //         // Page not found
  //       }
  //     });
  // }, [search]);

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

  // Action Card Choose
  // const actionCard = (id) => {
  //   // console.log(1213, id);
  //   dispatch(getItemProduct(id, token));
  //   history.push(`/products/${id}`);
  // };
  // console.log(history);
  return (
    <>
      <Navbar session="user" />
      <MainContent className="category-page">
        {searchState.exist && (
          <SectionContent>
            {searchKeyword && (
              <>
                <HeaderSection
                  title={`Menampilkan hasil pencarian: ${searchKeyword}`}
                />
                <InfoResult>
                  <div className="left">
                    <div className="item-info">
                      <PageviewIcon color="disabled" />
                      <p>
                        Menampilkan {searchState.result.meta.limit} hasil
                        pencarian ({searchState.result.meta.totalData} total
                        data)
                      </p>
                    </div>
                    <div className="item-info sort" onClick={handleFilter}>
                      <FilterListIcon
                        className={sortPrice === 'ASC' ? 'icon-filter' : ''}
                        color="disabled"
                      />
                      <p>Harga Terendah</p>
                    </div>
                  </div>
                  <div className="pagination">
                    <PaginationRange keyword={searchKeyword} />
                    {/* <div className="btn-pagination ">First</div>
                <div className="btn-pagination">-</div>
                <div className="btn-pagination active">3</div>
                <div className="btn-pagination">+</div>
                <div className="btn-pagination">Last</div> */}
                  </div>
                </InfoResult>
              </>
            )}
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
          </SectionContent>
        )}

        {!searchState.exist && (
          <SectionContent>
            <HeaderSection
              title={`Menampilkan hasil pencarian: ${searchKeyword}`}
            />
            <InfoResult>
              <div className="left">
                <div className="item-info">
                  <PageviewIcon color="disabled" />
                  <p>Menampilkan 0 hasil pencarian</p>
                </div>
              </div>
              <div className="pagination">
                <PaginationRange keyword={searchKeyword} />
              </div>
            </InfoResult>
            <CardGrouping>
              <h1>Kosong</h1>
            </CardGrouping>
          </SectionContent>
        )}
      </MainContent>
      {/* <Footer /> */}
    </>
  );
};

export default ResultProducts;

const InfoResult = styled.div`
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    gap: 2rem;
  }
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
  .pagination {
    display: flex;
    gap: 1rem;
    .btn-pagination {
      width: 32px;
      border: 1px solid #9b9b9b;
      color: #9b9b9b;
      padding: 2px 4px;
      box-sizing: content-box;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
        border: 1px solid #222222;
        color: #222222;
      }
      &.active {
        background-color: red;
        color: white;
        border: 0;
      }
    }
  }
`;

// const PaginationWrapper = styled.div`
//   margin-top: 5rem;
//   display: flex;
//   justify-content: center;
// `;
