// Copyright 2020 Khushraj Rathod
//
// This file is part of TicTacToe.
//
// TicTacToe is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// TicTacToe is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with TicTacToe.  If not, see <https://www.gnu.org/licenses/>.

"use strict";

const grid = document.getElementById("grid").children

const x =
    `<svg viewBox="0 0 40 40">
    <path style="stroke: #506ded; stroke-width: 2;" d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
</svg>`

const o =
    `<svg viewBox="0 0 40 40">
     <circle cx="20" cy="20" r="12" fill="#fff" style="stroke: #ea4335; stroke-width: 1.7;"></circle>
</svg>`

const winningPatterns = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
]

let turn = x // Player 1 = X, Player 2 = Y
let turnsPlayed = 0

for (const item of grid) {
    item.addEventListener("click", () => {
        if (!item.innerHTML) { // Because "" is falsy
            item.innerHTML = turn
            turnsPlayed++
            checkWin()
            turn === x ? turn = o : turn = x // Reverse the value of "current"
        }
    })
}

function checkWin() {
    for (const pattern of winningPatterns) {
        if (grid[pattern[0]].innerHTML.toUpperCase() === turn.toUpperCase() && grid[pattern[1]].innerHTML.toUpperCase() === turn.toUpperCase() && grid[pattern[2]].innerHTML.toUpperCase() === turn.toUpperCase()) {
            if (turn === x) {
                win("X")
            } else {
                win("O")
            }
            return
        }
    }

    if (turnsPlayed === 9) {
        draw()
    }
}

function win(player) {
    swal({
        title: player + " wins!",
        text: "Would you like to play again?",
        icon: "success",
        buttons: ["No", "Yes"]
    }).then ((choice) => {
        if (!choice) { // NO
            // noinspection SillyAssignmentJS
            document.body.outerHTML = document.body.outerHTML // Disallow further moves by removing EventListeners
        } else {
            for (const item of grid) {
                item.innerHTML = ""
            }
            turnsPlayed = 0
        }
    })
}

function draw() {
    swal({
        title: "Draw!",
        text: "Would you like to play again?",
        icon: "info",
        buttons: ["No", "Yes"]
    }).then ((choice) => {
        if (!choice) { // NO
            // noinspection SillyAssignmentJS
            document.body.outerHTML = document.body.outerHTML // Disallow further moves by removing EventListeners
        } else {
            for (const item of grid) {
                item.innerHTML = ""
            }
            turnsPlayed = 0
        }
    })
}
