import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import CardWrapper from '../CardWrapper';
// import { Heading } from '../Typography';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import { searchAction } from '../../../redux/actions/searchAction';
// import { Axios } from '../../../config';
// import NumberFormat from 'react-number-format';
// import { Button } from '../../../components/atoms';
import { customMedia } from '../../Layouts';

const WrapperSearchInput = ({ placeholder }) => {
  // const searchState = useSelector((state) => state.searchReducer);
  // console.log(searchState);
  // const onSearch = searchState.keyword;
  const history = useHistory();
  const dispatch = useDispatch();
  // const [result, setResult] = useState([]);

  const {
    register,
    handleSubmit,
    // formState: { errors },
    // getValues,
  } = useForm();

  const onSubmit = (data) => {
    const keyword = data.keyword;
    dispatch(searchAction(keyword));
    history.push(`/products?src=${keyword}`, keyword);
  };

  // const actionProduct = (id, name) => {
  //   history.push(`/product/${name}-${id}`);
  //   dispatch({ type: 'SET_SEARCHING', value: '' });
  // };

  // const actionSearch = () => {
  //   history.push(`/products?src=${onSearch.keyword}`, onSearch.keyword);
  //   // dispatch({ type: 'SET_SEARCHING', value: '' });
  // };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          name="search"
          placeholder={`${placeholder ? placeholder : 'Mau Mencari Apa? '}  `}
          {...register('keyword', { required: true })}
        />
        {/* {active && (
          <CardWrapper className="result-data-search">
            <Heading as={2}>Mencari {active ? active : '...'}</Heading>
            <ul>
              {Array.isArray(result) &&
                result.map((item) => {
                  return (
                    <li
                      onClick={() => actionProduct(item.id, item.nameProduct)}
                    >
                      <Link>
                        <p className="name">{item.nameProduct}</p>
                        <NumberFormat
                          value={item.price}
                          displayType={'text'}
                          thousandSeparator={true}
                          prefix={'Rp. '}
                          className="price"
                        />
                      </Link>
                    </li>
                  );
                })}
              {Array.isArray(result) && (
                <Button className="btn" onClick={actionSearch}>
                  Lihat hasil lebih banyak
                </Button>
              )}
            </ul>
          </CardWrapper>
        )} */}
        <button type="submit" className="icon-wrapper">
          <svg
            class="stroke icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.6697 16.1666L12.7415 11.2366C13.6249 10.0317 14.0981 8.57511 14.0915 7.08114C14.0747 3.18139 10.9205 0.0225957 7.02076 7.16372e-05C5.15452 -0.00837202 3.36242 0.729916 2.04368 2.05047C0.724944 3.37102 -0.0108835 5.16413 0.000121693 7.03036C0.016977 10.9305 3.17147 14.0895 7.07155 14.1121C8.57161 14.1186 10.0335 13.6398 11.2392 12.7473L11.2443 12.7434L16.168 17.6696C16.4342 17.9489 16.8308 18.062 17.2043 17.965C17.5777 17.868 17.8692 17.5762 17.9659 17.2027C18.0626 16.8292 17.9492 16.4326 17.6697 16.1666ZM7.06638 12.7004C3.94649 12.6824 1.42294 10.1554 1.40924 7.0355C1.40082 5.54272 1.98953 4.10851 3.04432 3.05215C4.09912 1.99579 5.53244 1.40495 7.02524 1.41115C10.1451 1.42909 12.6687 3.95609 12.6824 7.076C12.6908 8.56879 12.1021 10.003 11.0473 11.0594C9.99251 12.1157 8.55918 12.7066 7.06638 12.7004Z"
              fill="#8E8E93"
            />
          </svg>
        </button>
      </form>
    </Wrapper>
  );
};

export default WrapperSearchInput;

// STYLING IN JS
const Wrapper = styled.div`
  width: 100%;
  form {
    /* background: #ffffff; */
    border: 1px solid #8e8e93;
    box-sizing: border-box;
    border-radius: 23px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    position: relative;
    /* background-color: yellow; */
  }

  .input {
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 23px;
    width: 100%;
    /* height: 40px; */
    font: inherit;
    border: 0;
    /* background-color: yellow; */
  }
  input::-webkit-input-placeholder {
    ${customMedia.lessThan('550px')`
    color: transparent;
    `}
  }
  input:focus {
    outline: none;
  }
  .icon {
    border: 0;
    width: 18px;
    height: 18px;
  }
  .icon-wrapper {
    border: 0;
    background-color: transparent;
    height: 100%;
    right: 10px;
    box-sizing: content-box;
    padding: 0 10px;
    position: absolute;
    display: flex;
    align-items: center;
  }

  .icon-wrapper:hover {
    cursor: pointer;
  }

  .icon-wrapper:hover path {
    fill: ${colors.primary};
  }
  /* RESULT DATA SEARCH */
  .result-data-search {
    width: 100%;
    z-index: ${({ result }) => (Array.isArray(result) ? -9 : -1)};
    /* background-color: yellow; */
    position: absolute;

    height: max-content;
    z-index: -1;
    border-radius: 23px;
    padding: 50px 20px;
    ul {
      margin: 0;
      padding: 0;
      position: relative;
      li {
        list-style: none;
        font-size: 20px;
        margin-bottom: 10px;
        a {
          border-bottom: 1px solid #8e8e93;
          /* border-width: 1px; */
          color: #8e8e93;
          font-size: 1rem;
          display: flex;
          justify-content: space-between;
          text-decoration: none;
          padding-bottom: 8px;
          &:hover {
            color: #222222;
            font-weight: 600;
            cursor: pointer;
          }
        }
        .name {
          width: 60%;
          margin-bottom: 0;
        }
        .price {
          color: red;
          font-size: 14px;
        }
      }
      .btn {
        margin-bottom: 1rem;
        position: absolute;
        width: 100%;
      }
    }
  }
`;
