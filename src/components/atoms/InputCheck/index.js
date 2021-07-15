import React from 'react';
import { Label } from './styled';

const InputCheck = ({ className }) => {
  return (
    <Label className={className}>
      <input type="checkbox" />
      <span class="checkmark"></span>
    </Label>
  );
};

export default InputCheck;
