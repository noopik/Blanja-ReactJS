import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../assets/colors';
import { customMedia } from '../../Layouts/BreakPoints';
import WrapperSearchInput from './WrapperSearchInput';

const SearchInput = ({
  onChange,
  value,
  className,
  placeholder,
  session,
  actionSearch,
}) => {
  // const [color, setColor] = useState({
  // red: false,
  // checkedB: false,
  // checkedF: false,
  // checkedG: false,
  // });
  // const [size, setSize] = useState({
  //   XS: false,
  //   S: false,
  //   M: false,
  //   L: false,
  //   XL: false,
  // });
  // const [selected, setSelected] = useState(false);
  // const dispatch = useDispatch();
  // SHOW MODAL
  // const handleModalOpen = () => {
  //   dispatch({ type: 'SET_MODAL', value: true });
  // };
  // const handleChangeColor = (event) => {
  // selected === false ? setSelected(true) : setSelected(false);
  // return;
  // console.log(event);
  // setColor({ ...color, [event.target.name]: event.target.checked });
  // };

  // Handle Colors
  // const handleColors = (e) => {
  // selected === false ? setSelected(true) : setSelected(false);
  // };

  // console.log(selected);
  return (
    <Wrapper className={className}>
      {session !== 'seller' && (
        <div className="wrapper">
          <WrapperSearchInput
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            actionSearch={actionSearch}
          />
          <div className="icon-filter">
            <svg
              class="stroke"
              width="40"
              height="40"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 13C1 6.37258 6.37258 1 13 1H29C35.6274 1 41 6.37258 41 13V29C41 35.6274 35.6274 41 29 41H13C6.37258 41 1 35.6274 1 29V13Z"
                stroke="#8E8E93"
                stroke-width="1"
              />
              <path
                d="M29.3333 13.5H12.6667L19.3333 21.3833V26.8333L22.6667 28.5V21.3833L29.3333 13.5Z"
                stroke="#8E8E93"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
      {/* <Modal header="Filter">
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
                className={`box ${selected && 'selected'}`}
                onClick={(e) => handleColors(e)}
              >
                <p>XS</p>
              </div>
              <div className={`box ${selected && 'selected'}`}>
                <p>S</p>
              </div>
              <div className={`box ${selected && 'selected'}`}>
                <p>M</p>
              </div>
              <div className={`box ${selected && 'selected'}`}>
                <p>L</p>
              </div>
              <div className={`box ${selected && 'selected'}`}>
                <p>XL</p>
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
     */}
    </Wrapper>
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

// const ModalContent = styled.div`
//   .section {
//     /* background-color: pink; */
//     margin-bottom: 1rem;
//     &.check-wrapper {
//       .btn-wrapper {
//         width: max-content;
//         display: flex;
//         margin-top: 1rem;

//         .container-check {
//           display: block;
//           position: relative;
//           cursor: pointer;
//           margin-right: 20px;
//           -webkit-user-select: none;
//           -moz-user-select: none;
//           -ms-user-select: none;
//           user-select: none;

//           input {
//             position: absolute;
//             opacity: 0;
//             cursor: pointer;
//             height: 0;
//             width: 0;
//             &:checked ~ .checkmark:after {
//               display: flex;
//               position: absolute;
//               top: -4px;
//               left: -4px;
//               width: 40px;
//               height: 40px;
//               border-radius: 50%;
//               box-sizing: content-box;
//               background: transparent;
//               border: 2px solid #db3022;
//             }
//           }

//           .checkmark {
//             display: block;
//             position: relative;
//             top: 0;
//             left: 0;
//             width: 36px;
//             height: 36px;
//             border-radius: 50%;
//             filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

//             &:after {
//               content: '';
//               position: absolute;
//               display: none;
//             }
//           }

//           &:hover input ~ .checkmark {
//             opacity: 0.5;
//           }
//         }
//       }
//       .bg-black {
//         background-color: #020202;
//       }

//       .bg-white {
//         background-color: #ffffff;
//       }

//       .bg-red {
//         background-color: #b82222;
//       }

//       .bg-brown {
//         background-color: #bea9a9;
//       }

//       .bg-caramel {
//         background-color: #e2bb8d;
//       }
//     }
//     /* size */
//     &.size {
//       /* background-color: yellow; */
//       .box-wrapper {
//         display: flex;
//         justify-content: space-between;
//         .box {
//           border: 1px solid #9b9b9b;
//           border-radius: 10px;
//           width: 40px;
//           height: 40px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           &.selected {
//             background-color: red;
//             border: 0;
//             p {
//               color: white;
//               font-weight: 600;
//             }
//           }
//           p {
//             margin-bottom: 0;
//           }
//         }
//       }
//     }
//   }
// `;
