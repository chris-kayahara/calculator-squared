import './Button.scss'

export default function Button({ value, onClick }) {
    return (
        <button className={(value === "+" | value === "-" | value === "x" | value=== "/") ? "button__operator" : "button"} onClick={onClick}>
            {value}
        </button>
    )
}