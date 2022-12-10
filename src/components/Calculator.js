import { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [calculatorInput, setCalculatorInput] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const buttonName = e.target.name;
    setCalculatorInput((prevState) => calculate(
      {
        total: prevState.total,
        next: prevState.next,
        operation: prevState.operation,
      },
      buttonName,
    ));
  };

  const { total, next, operation } = calculatorInput;
  const result = `${total}${operation}${next}`.replace(/null/g, '');
  const adjustedResult = result.replace(/undefined/g, '');

  return (
    <div className="calculator">
      <div className="screen">{adjustedResult}</div>
      <div className="calculator-buttons">
        <button type="button" name="AC" onClick={handleClick}>AC</button>
        <button type="button" name="+/-" onClick={handleClick}>+/-</button>
        <button type="button" name="%" onClick={handleClick}>%</button>
        <button type="button" name="÷" onClick={handleClick}>÷</button>
        <button type="button" name="7" onClick={handleClick}>7</button>
        <button type="button" name="8" onClick={handleClick}>8</button>
        <button type="button" name="9" onClick={handleClick}>9</button>
        <button type="button" name="x" onClick={handleClick}>x</button>
        <button type="button" name="4" onClick={handleClick}>4</button>
        <button type="button" name="5" onClick={handleClick}>5</button>
        <button type="button" name="6" onClick={handleClick}>6</button>
        <button type="button" name="-" onClick={handleClick}>-</button>
        <button type="button" name="1" onClick={handleClick}>1</button>
        <button type="button" name="2" onClick={handleClick}>2</button>
        <button type="button" name="3" onClick={handleClick}>3</button>
        <button type="button" name="+" onClick={handleClick}>+</button>
        <button type="button" name="0" onClick={handleClick}>0</button>
        <button type="button" name="." onClick={handleClick}>.</button>
        <button type="button" name="=" onClick={handleClick}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
