import React, { useState } from 'react';
import Button from './Button.jsx';

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const functions = ['+', '-', '*', '/', '=', 'x^y','AC'];

  const [value, setValue] = useState(0);
  const [bgValue, setBgValue] = useState(null);
  const [currentFunc, setCurrentFunc] = useState(null);
  const [isAnswer, setIsAnswer] = useState(false);

  const handleButtonPress = (val) => {
    if (!currentFunc) {
      if (val >= 0 && val <= 10) {
        handleDigit(val);
      } else if (val === 'AC') {
        setValue(0);
      } else {
        setCurrentFunc(val);
      }
    } else {
      if (val === '=') {
        evaluate();
      } else {
        if (!bgValue) {
          setBgValue(value);
          handleDigit(val, true)
        } else {
          handleDigit(val);
        }
      }
    }
  };

  const evaluate = () => {
    if (currentFunc === '+') {
      setValue(parseInt(bgValue) + parseInt(value));
    } else if (currentFunc === '-') {
      setValue(parseInt(bgValue) - parseInt(value));
    } else if (currentFunc === '*') {
      setValue(parseInt(bgValue) * parseInt(value));
    } else if (currentFunc === '/') {
      setValue(parseInt(bgValue) / parseInt(value));
    } else if (currentFunc === 'x^y') {
      setValue(parseInt(bgValue) ** parseInt(value));
    }
    setIsAnswer(true);
    setCurrentFunc(null);
    setBgValue(null);
  };

  const handleDigit = (val, fresh) => {
    if (value === 0 || isAnswer || fresh) {
      setValue('' + val);
      setIsAnswer(false);
    } else {
      setValue(value + '' + val);
    }
  };


  return (
    <>
      <div id="bar">{value}</div>
      {numbers.map(num => <Button key={num} val={num} handleClick={handleButtonPress}/>)}
      <br></br>
      {functions.map(func => <Button key={func} val={func} currentFunc={currentFunc} handleClick={handleButtonPress}/>)}
    </>
  )
};

export default App;
