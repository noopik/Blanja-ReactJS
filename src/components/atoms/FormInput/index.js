import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const FormInput = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  className,
  ...props
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      className={className}
      {...props}
    />
  );
};

export default FormInput;

const Input = styled.input`
  border: 1px solid #9b9b9b;
  height: 48px;
  width: 400px;
  box-sizing: border-box;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ name }) => (name ? '#222222' : '#9b9b9b')};
  filter: drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.05));
  border-radius: 4px;
  &:focus {
    outline: none;
  }
`;
