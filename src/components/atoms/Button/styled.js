import styled from 'styled-components';

export const ButtonItem = styled.button`
  background: ${({ primary, disabled }) => {
    if (disabled) return '#cacaca';
    if (primary) return '#db3022';
    return 'transparent';
  }};
  border-radius: 25px;
  border: 0;
  box-sizing: border-box;
  color: ${({ primary, disabled }) => {
    if (disabled) return '#666666';
    if (primary) return 'white';
    return '#3b3b3b';
  }};
  width: 100%;
  padding: 8px 0;
  /* height: 36px; */
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* border: 1px solid #9b9b9b; */
  border: ${({ primary }) => (primary ? 0 : 1)}px;
  border-color: ${({ primary }) => (primary ? '#db3022' : '#9b9b9b')}px;
  border-style: solid;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    color: ${({ primary, disabled }) => {
      if (disabled) return '#666666';
      if (primary) return 'white';
    }};
    border-color: ${({ primary, disabled }) => {
      if (disabled) return '#cacaca';
      if (primary) return '#db3022';
      return '#1b1b1b';
    }}px;
  }
`;

export const BtnLink = styled(ButtonItem)`
  border-radius: 0;
  border: 0;
  background: transparent;
  color: ${({ primary }) => (primary ? '#db3022' : '#9b9b9b')};
  width: max-content;
  padding: 4px 8px;
  &:hover {
    opacity: 0.4;
    cursor: pointer;
    color: ${({ primary }) => (primary ? '#db3022' : '#9b9b9b')};
  }
`;
