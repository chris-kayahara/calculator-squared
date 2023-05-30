import { useState, useEffect } from 'react'

import Button from './components/Button/Button'
import Screen from './components/Screen/Screen'
import SquareContainer from './components/SquareContainer/SquareContainer'

import './App.scss'

const numberValues = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  ["C", "0", "."]
]

const operatorValues = ["/", "x", "-", "+"]

function App() {

  const [showResult, SetShowResult] = useState(false);
  const [calc, setCalc] = useState({
    num1: "",
    operator: "",
    num2: "",
    result: "",
  })
  const [highestNumber, setHighestNumber] = useState("num1");
  const [showSquares, setShowSquare] = useState(false);

  function handleNumberClick(e){
    e.preventDefault();
    const value = e.target.innerHTML;

    if (calc.operator === "") {
      setCalc({
        ...calc,
        num1: Number(calc.num1 + value)
      })
    } else {
      setCalc({
        ...calc,
        num2: Number(calc.num2 + value)
      })}
  }

  function handleOperatorClick(e) {
    e.preventDefault();
    const value = e.target.innerHTML;
    if (!calc.num1) {
      return
    } else {
      setCalc({
        ...calc,
        operator: value
      })
    }
  }

  function handleEqualClick(e){
    e.preventDefault();

    setCalc({
      ...calc,
      result: 
        calc.operator === "+"
          ? calc.num1 + calc.num2
          : calc.operator === "-"
          ? calc.num1 - calc.num2
          : calc.operator === "x"
          ? calc.num1 * calc.num2
          : calc.num1 / calc.num2,
    });
    console.log(calc);
    SetShowResult(true);
    setShowSquare(true);
  }

  useEffect(() => {
    (calc.result > calc.num1) & (calc.result > calc.num2)
      ? setHighestNumber("result")
      : calc.num2 > calc.num1
      ? setHighestNumber("num2")
      : setHighestNumber("num1")
  }, [calc])

  function handleClearClick(e) {
    e.preventDefault();
    SetShowResult(false);
    setShowSquare(false);
    setCalc({
      num1: "",
      operator: "",
      num2: "",
      result: "",
    })
    setHighestNumber("num1");

  }

  // first number click make square max height and width
  // second click check if number is larger than first number
    // if yes then set second number to max height and width


  return (
    <div className="calc">
      <div className="calc__screen-container">
        <SquareContainer calc={calc} highestNumber={highestNumber} showSquares={showSquares}/>
        <Screen calc={calc}/>
      </div>
      <div className="calc__btn-container">
        <div className="calc__number-pad">
          {numberValues.flat().map((number, i) => {
            return (
              <Button 
                value={number} 
                key={i}
                onClick={number === "C"
                  ? handleClearClick
                  : handleNumberClick}/>
            )
          })}
        </div>
        <div className="calc__operators">
          {operatorValues.map((operator, i) => {
            return (
              <Button 
                value={operator} 
                key={i}
                onClick={handleOperatorClick}/>
            )
          })}
        </div>
      </div>
      <Button value="=" onClick={handleEqualClick}/>
    </div>
  )
}

export default App
