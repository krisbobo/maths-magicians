import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttonName = e.target.name;
    this.setState((prevState) => calculate(
      {
        total: prevState.total,
        next: prevState.next,
        operation: prevState.operation,
      },
      buttonName,
    ));
  }

  render() {
    const { total, next, operation } = this.state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');

    return (
      <div className="calculator">
        <div className="screen">{result}</div>
        <div className="calculator-buttons">
          <button type="button" name="AC" onClick={this.handleClick}>AC</button>
          <button type="button" name="+/-" onClick={this.handleClick}>+/-</button>
          <button type="button" name="%" onClick={this.handleClick}>%</button>
          <button type="button" name="/" onClick={this.handleClick}>/</button>
          <button type="button" name="7" onClick={this.handleClick}>7</button>
          <button type="button" name="8" onClick={this.handleClick}>8</button>
          <button type="button" name="9" onClick={this.handleClick}>9</button>
          <button type="button" name="x" onClick={this.handleClick}>x</button>
          <button type="button" name="4" onClick={this.handleClick}>4</button>
          <button type="button" name="5" onClick={this.handleClick}>5</button>
          <button type="button" name="6" onClick={this.handleClick}>6</button>
          <button type="button" name="-" onClick={this.handleClick}>-</button>
          <button type="button" name="1" onClick={this.handleClick}>1</button>
          <button type="button" name="2" onClick={this.handleClick}>2</button>
          <button type="button" name="3" onClick={this.handleClick}>3</button>
          <button type="button" name="+" onClick={this.handleClick}>+</button>
          <button type="button" name="0" onClick={this.handleClick}>0</button>
          <button type="button" name="." onClick={this.handleClick}>.</button>
          <button type="button" name="=" onClick={this.handleClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
