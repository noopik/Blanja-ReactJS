import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Axios } from '../../../config';

const Breadcrumbs = ({ className, data, active, title }) => {
  const [dataBreadcrumb, setDataBreadcrumb] = useState();
  const [category, setCategory] = useState('');

  useEffect(() => {
    setDataBreadcrumb(data);
    Axios.get(`/category/${data.id_category ? data.id_category : data.id}`)
      .then((res) => {
        const resData = res.data;
        console.log(resData);

        setCategory(resData.data[0].nameCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  console.log('data', data);

  return (
    <Wrapper className={className}>
      <ul>
        <li>
          <Link to="/" className="anchor">
            Home
          </Link>
          <span>/</span>
        </li>
        <li>
          <Link
            to={`/categories/${data.id_category ? data.id_category : data.id}`}
            className={`${active === 'category' ? 'active' : ''} anchor`}
          >
            {category}
          </Link>
          {dataBreadcrumb?.nameProduct && <span>/</span>}
        </li>
        {dataBreadcrumb?.nameProduct && (
          <li>
            <Link to="#" className="anchor active">
              {dataBreadcrumb.nameProduct ? dataBreadcrumb.nameProduct : 'Kooo'}
            </Link>
          </li>
        )}
      </ul>
    </Wrapper>
  );
};

export default Breadcrumbs;

const Wrapper = styled.div`
  ul {
    display: flex;
    flex-flow: wrap;
    margin: 0;
    padding: 0;
    color: #9b9b9b;
    gap: 1rem;

    li {
      list-style: none;
      .anchor {
        color: #9b9b9b;
      }
      .anchor:hover {
        color: #22222297;
        font-weight: 600;
      }
      .anchor.active {
        color: #222222;
        font-weight: 700;
      }
      span {
        /* margin: 0 1rem; */
        margin-left: 1rem;
      }
    }
  }
`;
