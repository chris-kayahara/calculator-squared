import './Screen.scss';

export default function Screen({ calc }) {
    return (
        <div className="screen">
            <div className="screen__number">
                {calc.num1}
            </div>
            <div className="screen__number">
                {calc.operator}
            </div>
            <div className="screen__number">
                {calc.num2}
            </div>
            <div className="screen__equals">
                =
            </div>
            <div className="screen__number">
                {calc.result}
            </div>
        </div>
    )
}