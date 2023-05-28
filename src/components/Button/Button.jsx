import './Button.scss'

export default function Button({ value, onClick }) {
    return (
        <button 
            className={(value === "+" | value === "-" | value === "x" | value=== "/") 
                ? "button button__operator" 
                : value === "="
                ? "button button__equals"
                : value === "C" | value === "."
                ? "button button__clear"
                : "button"} 
            onClick={onClick}>
            {value}
        </button>
    )
}