import styled from 'styled-components';

export const Label = styled.label`
  /* background-color: yellowgreen; */
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 25px;
  width: fit-content;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 4px;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  & input:checked ~ .checkmark {
    background: #db3022;
  }
  & input:checked ~ .checkmark:after {
    display: block;
  }
  & .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
