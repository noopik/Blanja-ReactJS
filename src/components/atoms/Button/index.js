import React from 'react';
import { BtnLink, ButtonItem } from './styled';

const Button = ({
  children,
  primary,
  className,
  disabled,
  onClick,
  type,
  ...props
}) => {
  return (
    <>
      {type === 'link' && (
        <BtnLink primary={primary} className={className} onClick={onClick}>
          {children}
        </BtnLink>
      )}
      {type !== 'link' && (
        <ButtonItem
          primary={primary}
          className={className}
          onClick={onClick}
          disabled={disabled}
          {...props}
        >
          {children}
        </ButtonItem>
      )}
    </>
  );
};

export default Button;
