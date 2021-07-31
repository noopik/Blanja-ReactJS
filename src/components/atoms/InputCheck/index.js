import React from 'react';
import { Label } from './styled';

const InputCheck = ({ className, onClick }) => {
  return (
    <Label className={className} onClick={onClick}>
      <input type="checkbox" />
      <span class="checkmark"></span>
    </Label>
  );
};

export default InputCheck;
