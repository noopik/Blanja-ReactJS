import React from 'react';
import { BtnLink, ButtonItem } from './styled';

const Button = ({ children, primary, className, onClick, type }) => {
  return (
    <>
      {type === 'link' && (
        <BtnLink primary={primary} className={className} onClick={onClick}>
          {children}
        </BtnLink>
      )}
      {type !== 'link' && (
        <ButtonItem primary={primary} className={className} onClick={onClick}>
          {children}
        </ButtonItem>
      )}
    </>
  );
};

export default Button;
