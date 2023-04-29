import { useState } from 'react'

import Button from './components/Button/Button'
import Screen from './components/Screen/Screen'

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
    num1: 0,
    operator: "",
    num2: 0,
    result: 0
  })

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
          : calc.num1 / calc.num2
    })
    console.log(calc);
    SetShowResult(true);
  }

  function handleClearClick(e) {
    e.preventDefault();
    SetShowResult(false);
    setCalc({
      num1: 0,
      operator: "",
      num2: 0,
      result: 0
    })
  }

  return (
    <div className="calc">
      <div className="calc__graphic-container">

      </div>
      <Screen value={calc.num2 === 0 ? calc.num1 : calc.num2}/>
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
