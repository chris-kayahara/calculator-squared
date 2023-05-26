import './Square.scss'

export default function Square({value}) {
    return(
        <div 
            className="square"
            style={{width: value, height: value}}>
        </div>
    )
}