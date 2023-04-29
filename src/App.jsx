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

  const [calc, setCalc] = useState({
    num1: 0,
    sign: "",
    num2: 0,
    result: 0
  })

  return (
    <div className="calc">
      <div className="calc__graphic-container">

      </div>
      <Screen value={0}/>
      <div className="calc__btn-container">
        <div className="calc__number-pad">
          {numberValues.flat().map((number, i) => {
            return (
              <Button value={number} key={i}/>
            )
          })}
        </div>
        <div className="calc__operators">
          {operatorValues.map((number, i) => {
            return (
              <Button value={number} key={i}/>
            )
          })}
        </div>
      </div>
      <Button value="="/>
    </div>
  )
}

export default App
