import React from 'react';

const Button = ({val, handleClick, currentFunc}) => (
  currentFunc === val ? <button value={val} onClick={() => handleClick(val)}><b>{val}</b></button> :
    <button value={val} onClick={() => handleClick(val)}>{val}</button>
);

export default Button;
