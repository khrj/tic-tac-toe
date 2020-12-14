export default function Square(props) {
    const x = <svg viewBox="0 0 40 40"><path style={{ stroke: "#506ded", "stroke-width": "2" }} d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
    const o = <svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="12" fill="#fff" style={{ stroke: "#ea4335", "stroke-width": "1.7" }}></circle></svg>

    const valuesMap = {
        'X': x,
        'O': o,
        null: ''
    }

    return (
        <button className="square" onClick={props.onClick}>
            {valuesMap[props.value]}
        </button>
    )
}
