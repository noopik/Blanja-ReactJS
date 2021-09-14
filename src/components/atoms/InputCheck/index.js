import React from 'react';
import { Label } from './styled';

const InputCheck = ({ className, onClick, ...props }) => {
  return (
    <Label className={className} onClick={onClick}>
      <input type="checkbox" {...props} />
      <span class="checkmark"></span>
    </Label>
  );
};

export default InputCheck;
