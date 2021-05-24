import { value } from "./types"
export default function Square(props: { onClick: any; value: value }) {
    const x: JSX.Element = <svg className="w-full h-full" viewBox="0 0 40 40">
        <path style={{ stroke: "#506ded", strokeWidth: "2" }} d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
    </svg>
    const o: JSX.Element = <svg className="w-full h-full" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="12" fill="#fff" style={{ stroke: "#ea4335", strokeWidth: "1.7" }}></circle>
    </svg>

    const valuesMap = {
        [value.X]: x,
        [value.O]: o,
        [value.null]: "",
    }

    return (
        <button
            className="bg-white border border-solid border-gray-400 p-0 text-center float-left focus:outline-none"
            onClick={props.onClick}
        >
            {valuesMap[props.value]}
        </button>
    )
}
