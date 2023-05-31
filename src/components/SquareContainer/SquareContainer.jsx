import './SquareContainer.scss'

export default function SquareContainer({calc, highestNumber, showSquares}) {
    let num1 = calc.num1;
    let num2 = calc.num2;
    let result = calc.result;

    let num1Square = 0;
    let num2Square = 0;
    let resultSquare = 0;
    let display = "";

    if (showSquares) {
        display = "square-container__symbols";
    } else if (!showSquares) {
        display = "square-container__hidden";
    }

    switch (highestNumber) {
        case "num1":
            num1Square = 30;
            num2Square = (Math.sqrt(num2)/Math.sqrt(num1))*30;
            resultSquare = (Math.sqrt(result)/Math.sqrt(num1))*30;
            break;
        case "num2":
            num1Square = (Math.sqrt(num1)/Math.sqrt(num2))*30;
            num2Square = 30;
            resultSquare = (Math.sqrt(result)/Math.sqrt(num2))*30;
            break;
        case "result":
            num1Square = (Math.sqrt(num1)/Math.sqrt(result))*30;
            num2Square = (Math.sqrt(num2)/Math.sqrt(result))*30;
            resultSquare = 30;
            break;
    }

    return (
        <div className="square-container">
            <div
                id="num1"
                className="square-container__square"
                style={ showSquares ? {
                    width:`${num1Square}%`, 
                    paddingBottom: `${num1Square}%`
                } : {
                    display: 'hidden'}}
                >
            </div>
            <div className={display}>{calc.operator}</div>
            <div
                id="num2"
                className="square-container__square"
                style={ showSquares ? {
                    width:`${num2Square}%`, 
                    paddingBottom: `${num2Square}%`
                } : {
                    display: 'hidden'}}>
            </div>
            <div className={display}>=</div>
            <div
                id="result"
                className="square-container__square"
                style={ showSquares ? {
                    width:`${resultSquare}%`, 
                    paddingBottom: `${resultSquare}%`
                } : {
                    display: 'hidden'}}>
            </div>
        </div>
    )
}