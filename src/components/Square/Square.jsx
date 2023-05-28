import './Square.scss'

export default function Square({value}) {
    return(
        <div 
            className="square"
            style={{width: Math.sqrt(value)*10, height: Math.sqrt(value)*10}}>
        </div>
    )
}