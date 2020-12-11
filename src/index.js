import React from 'react'
import ReactDOM from 'react-dom'
import swal from 'sweetalert'
import './index.css'

function Square(props) {
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

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            squares: [
                null, null, null,
                null, null, null,
                null, null, null,
            ],
            xIsNext: true
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        )
    }

    render() {
        const winner = calculateWinner(this.state.squares)
        if (winner) {
            swal({
                title: winner + " wins!",
                text: "Would you like to play again?",
                icon: "success",
                buttons: ["No", "Yes"]
            }).then((choice) => {
                if (choice) {
                    this.setState({
                        squares: [
                            null, null, null,
                            null, null, null,
                            null, null, null,
                        ]
                    })
                }
            })
        } else if (this.state.squares.filter(e => e).length >= 9) {
            swal({
                title: "Draw!",
                text: "Would you like to play again?",
                icon: "info",
                buttons: ["No", "Yes"]
            }).then((choice) => {
                if (choice) {
                    this.setState({
                        squares: [
                            null, null, null,
                            null, null, null,
                            null, null, null,
                        ]
                    })
                }
            })
        }

        return (
            <div className="board">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Board />
            </div>
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

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)