import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import { customMedia } from '../../Layouts/BreakPoints';
import { Modal } from '../../molecules';
import Button from '../Button';
import { Text } from '../Typography';
import WrapperSearchInput from './WrapperSearchInput';

const SearchInput = ({
  onChange,
  className,
  placeholder,
  session,
  actionSearch,
  onSubmit,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  // FILTER STATE
  const [color, setColor] = useState({
    red: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });
  const [size, setSize] = useState({
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
  });
  const [category, setCategory] = useState({
    All: false,
    Women: false,
    Men: false,
    L: false,
    Jacket: false,
  });

  // Handle Selected
  const handleColors = (e, change) => {
    // console.log(e.target.innerText);
    switch (change.target) {
      case 'color':
        setColor({
          ...color,
          [change.value]: color[change.value] === true ? false : true,
        });
        break;
      case 'size':
        const resetSize = {
          XS: false,
          S: false,
          M: false,
          L: false,
          XL: false,
        };
        setSize({
          ...resetSize,
          [change.value]: size[change.value] === true ? false : true,
        });
        break;
      case 'category':
        const resetCategory = {
          All: false,
          Women: false,
          Men: false,
          L: false,
          Jacket: false,
        };
        setCategory({
          ...resetCategory,
          [change.value]: category[change.value] === true ? false : true,
        });
        break;

      default:
        break;
    }
  };

  // console.log(selected)
  return (
    <>
      <Wrapper className={className}>
        {session !== 'seller' && (
          <div className="wrapper">
            <WrapperSearchInput
              onChange={onChange}
              placeholder={placeholder}
              onSubmit={onSubmit}
            />
            <div className="icon-filter" onClick={handleShowModal}>
              <svg
                class="stroke"
                width="40"
                height="40"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z"
                  stroke="#8E8E93"
                  strokeWidth="1"
                />
                <path
                  d="M29.3333 13.5H12.6667L19.3333 21.3833V26.8333L22.6667 28.5V21.3833L29.3333 13.5Z"
                  stroke="#8E8E93"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        )}
      </Wrapper>
      <Modal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        title="Filter"
        size="medium"
      >
        <ModalContent>
          <div className="section check-wrapper">
            <Text as="lg" font="medium">
              Colors
            </Text>

            <div className="btn-wrapper">
              <label class="container-check">
                <input type="checkbox" />
                <span class="checkmark bg-black"></span>
              </label>
              <label class="container-check">
                <input type="checkbox" />
                <span class="checkmark bg-white"></span>
              </label>
              <label class="container-check">
                <input type="checkbox" />
                <span class="checkmark bg-red"></span>
              </label>
              <label class="container-check">
                <input type="checkbox" />
                <span class="checkmark bg-brown"></span>
              </label>
              <label class="container-check">
                <input type="checkbox" />
                <span class="checkmark bg-caramel"></span>
              </label>
              <label class="container-check">
                <input type="checkbox" />
                <span class="checkmark bg-donker"></span>
              </label>
            </div>
          </div>

          <div className="section size">
            <Text as="lg" font="medium">
              Sizes
            </Text>
            <div className="box-wrapper">
              <div
                className={`box ${size.XS && 'selected'}`}
                onClick={(e) =>
                  handleColors(e, { target: 'size', value: 'XS' })
                }
              >
                <p>XS</p>
              </div>
              <div
                className={`box ${size.S && 'selected'}`}
                onClick={(e) => handleColors(e, { target: 'size', value: 'S' })}
              >
                <p>S</p>
              </div>
              <div
                className={`box ${size.M && 'selected'}`}
                onClick={(e) => handleColors(e, { target: 'size', value: 'M' })}
              >
                <p>M</p>
              </div>
              <div
                className={`box ${size.L && 'selected'}`}
                onClick={(e) => handleColors(e, { target: 'size', value: 'L' })}
              >
                <p>L</p>
              </div>
              <div
                className={`box ${size.XL && 'selected'}`}
                onClick={(e) =>
                  handleColors(e, { target: 'size', value: 'XL' })
                }
              >
                <p>XL</p>
              </div>
            </div>
          </div>
          <div className="section category">
            <Text as="lg" font="medium">
              Category
            </Text>
            <div className="box-wrapper">
              <div
                className={`box ${category.All && 'selected'}`}
                onClick={(e) =>
                  handleColors(e, { target: 'category', value: 'All' })
                }
              >
                <p>All</p>
              </div>
              <div
                className={`box ${category.Women && 'selected'}`}
                onClick={(e) =>
                  handleColors(e, { target: 'category', value: 'Women' })
                }
              >
                <p>Women</p>
              </div>
              <div
                className={`box ${category.Men && 'selected'}`}
                onClick={(e) =>
                  handleColors(e, { target: 'category', value: 'Men' })
                }
              >
                <p>Men</p>
              </div>
              <div
                className={`box ${category.Jacket && 'selected'}`}
                onClick={(e) =>
                  handleColors(e, { target: 'category', value: 'Jacket' })
                }
              >
                <p>Jacket</p>
              </div>
            </div>
          </div>
          <div className="footer">
            <Button>Discard</Button>
            <Button primary>Apply</Button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchInput;

const Wrapper = styled.div`
  /* background-color: yellowgreen; */
  width: 100%;
  height: 40px;

  .wrapper {
    display: flex;
    /* display: none;  */
    gap: 1rem;
    /* background-color: yellow; */
    ${customMedia.lessThan('laptop')`
        /* for screen sizes less than 1280px */ 
      // background-color: cyan; 
      margin-left: 0; 
      width: 100%;
    `}
    width: 80%;
    margin-left: 60px;
  }
  .icon-filter:hover {
    cursor: pointer;
  }
  .icon-filter:hover path {
    stroke: ${colors.primary};
  }
`;

const ModalContent = styled.div`
  .section {
    padding: 1rem;
    margin-bottom: 1rem;
    &.check-wrapper {
      .btn-wrapper {
        width: max-content;
        display: flex;
        margin-top: 1rem;

        .container-check {
          display: block;
          position: relative;
          cursor: pointer;
          margin-right: 20px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;

          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            &:checked ~ .checkmark:after {
              display: flex;
              position: absolute;
              top: -4px;
              left: -4px;
              width: 40px;
              height: 40px;
              border-radius: 50%;
              box-sizing: content-box;
              background: transparent;
              border: 2px solid #db3022;
            }
          }

          .checkmark {
            display: block;
            position: relative;
            top: 0;
            left: 0;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

            &:after {
              content: '';
              position: absolute;
              display: none;
            }
          }

          &:hover input ~ .checkmark {
            opacity: 0.5;
          }
        }
      }
      .bg-black {
        background-color: #020202;
      }

      .bg-white {
        background-color: #ffffff;
      }

      .bg-red {
        background-color: #b82222;
      }

      .bg-brown {
        background-color: #bea9a9;
      }

      .bg-caramel {
        background-color: #e2bb8d;
      }
    }
    /* size */
    &.size {
      .box-wrapper {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        .box {
          border: 1px solid #9b9b9b;
          border-radius: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;

          &:hover {
            background-color: red;
            cursor: pointer;
            border: 0;
            p {
              color: white;
              font-weight: 600;
            }
          }
          &.selected {
            background-color: red;
            border: 0;
            p {
              color: white;
              font-weight: 600;
            }
          }
          p {
            margin-bottom: 0;
          }
        }
      }
    }
    /* CATEGORY */
    &.category {
      .box-wrapper {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        .box {
          border: 1px solid #9b9b9b;
          border-radius: 10px;
          width: 80px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            background-color: red;
            cursor: pointer;
            border: 0;
            p {
              color: white;
              font-weight: 600;
            }
          }
          &.selected {
            background-color: red;
            border: 0;
            p {
              color: white;
              font-weight: 600;
            }
          }
          p {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  /* BTN ACTION */
  .footer {
    margin-top: 2rem;
    display: flex;
    padding: 1rem;
    gap: 1rem;
  }
`;
