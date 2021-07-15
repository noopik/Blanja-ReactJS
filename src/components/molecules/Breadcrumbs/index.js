import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    display: flex;
    margin: 0;
    padding: 0;
    color: #9b9b9b;

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
        margin: 0 1rem;
      }
    }
  }
`;

const Breadcrumbs = ({ className }) => {
  return (
    <Wrapper className={className}>
      <ul>
        <li>
          <Link to="#" className="anchor">
            Home
          </Link>
          <span>/</span>
        </li>
        <li>
          <Link to="#" className="anchor">
            T-Shirt
          </Link>
          <span>/</span>
        </li>
        <li>
          <Link to="#" className="anchor active">
            Baju Batik
          </Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Breadcrumbs;
