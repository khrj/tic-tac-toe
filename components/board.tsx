import { Dispatch, SetStateAction, useState } from 'react'
import Square from './square'
import swal from 'sweetalert'
import { value } from './types'

export default function Board() {
    let [squares, setSquares]: [squares: value[], setSquares: Dispatch<SetStateAction<any[]>>] = useState(Array(9).fill(value.null))
    let [xIsNext, setXIsNext] = useState(true)

    const winner = calculateWinner(squares)
    if (winner !== value.null) {
        swal({
            title: winner + " wins!",
            text: "Would you like to play again?",
            icon: "success",
            buttons: ["No", "Yes"]
        }).then((choice) => {
            if (choice) {
                setSquares(Array(9).fill(value.null))
            }
        })
    } else if (squares.filter(e => e !== value.null).length >= 9) {
        swal({
            title: "Draw!",
            text: "Would you like to play again?",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then((choice) => {
            if (choice) {
                setSquares(Array(9).fill(value.null))
            }
        })
    }

    return (
        <div className="grid grid-rows-3 grid-cols-3 h-full w-full border-2 border-solid border-gray-400">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    )


    function handleClick(i: number) {
        const currentSquares = squares.slice()
        if (calculateWinner(currentSquares) !== value.null || currentSquares[i] !== value.null) {
            console.log(currentSquares[i])
            return
        }
        currentSquares[i] = xIsNext ? value.X : value.O
        setSquares(currentSquares)
        setXIsNext(!xIsNext)
    }

    function renderSquare(i: number) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        )
    }
}


function calculateWinner(squares: value[]) {
    const winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < winningPatterns.length; i++) {
        const [a, b, c] = winningPatterns[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }
    return value.null
}