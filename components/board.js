import { useState } from 'react'
import Square from './square.js'
import swal from 'sweetalert'

export default function Board() {
    let [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null])
    let [xIsNext, setXIsNext] = useState(true)

    const winner = calculateWinner(squares)
    if (winner) {
        swal({
            title: winner + " wins!",
            text: "Would you like to play again?",
            icon: "success",
            buttons: ["No", "Yes"]
        }).then((choice) => {
            if (choice) {
                setSquares([null, null, null, null, null, null, null, null, null])
            }
        })
    } else if (squares.filter(e => e).length >= 9) {
        swal({
            title: "Draw!",
            text: "Would you like to play again?",
            icon: "info",
            buttons: ["No", "Yes"]
        }).then((choice) => {
            if (choice) {
                setSquares([null, null, null, null, null, null, null, null, null])
            }
        })
    }

    return (
        <div className="board">
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


    function handleClick(i) {
        const currentSquares = squares.slice()
        if (calculateWinner(currentSquares) || currentSquares[i]) {
            return
        }
        currentSquares[i] = xIsNext ? 'X' : 'O'
        setSquares(currentSquares)
        setXIsNext(!xIsNext)
    }

    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        )
    }
}


function calculateWinner(squares) {
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
    return null
}