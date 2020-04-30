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


#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<string> toDraw{"1", "2", "3", "4", "5", "6", "7", "8", "9"}; // NOLINT(cert-err58-cpp)

void reset();

void reDrawBoard(bool gameOver);

int playerTurn = 1;

int check(); // 0 - Game in progress; 1 - Player 1 wins; 2 - Player 2 wins;
int turnsPlayed = 0;

int main() {

    while (true) {
        reDrawBoard(false);
        string input;
        int inputToInt;

        while (true) {
            input = "";
            cin >> input;

            try {
                inputToInt = stoi(input);
                if (inputToInt > 9) {
                    cout << "\nInvalid Value. Try again.";
                    cout << "\nPlayer " + to_string(playerTurn) + ", Enter a number:";
                    continue;
                }
            }
            catch (exception &e) {
                cout << "\nInvalid Value. Try again.";
                cout << "\nPlayer " + to_string(playerTurn) + ", Enter a number:";
                continue;
            }

            try {
                if (inputToInt == stoi(toDraw.at(static_cast<unsigned long>(inputToInt - 1)))) {
                    break;
                }
            }
            catch (exception &e) {
                cout << "Position already occupied. Please try again.";
                cout << "\nPlayer " + to_string(playerTurn) + ", Enter a number:";
                continue;
            }
        }

        if (playerTurn == 1) {
            toDraw[inputToInt - 1] = "X";
            turnsPlayed++;
            playerTurn = 2;
        } else {
            toDraw[inputToInt - 1] = "O";
            turnsPlayed++;
            playerTurn = 1;
        }

        int result = check();
        if (result == 1) {
            reDrawBoard(true);
            cout << "PLAYER ONE WINS!!\n";
            cout << "Would you like to play again? (Y/N): ";
            string response;
            cin >> response;
            transform(response.begin(), response.end(), response.begin(), ::tolower);
            if (response != "y") {
                printf("\e[1;1H\e[2J");
                return 0;
            }
            reset();
            continue;
        }

        if (result == 2) {
            reDrawBoard(true);
            cout << "PLAYER TWO WINS!!\n";
            cout << "Would you like to play again? (Y/N): ";
            string response;
            cin >> response;
            transform(response.begin(), response.end(), response.begin(), ::tolower);
            if (response != "y") {
                printf("\e[1;1H\e[2J");
                return 0;
            }
            reset();
            continue;
        }

        if (turnsPlayed == 9) {
            cout << "DRAW!!\n";
            cout << "Would you like to play again? (Y/N): ";
            string response;
            cin >> response;
            transform(response.begin(), response.end(), response.begin(), ::tolower);
            if (response != "y") {
                printf("\e[1;1H\e[2J");
                return 0;
            }
            reset();
        }
    }
}

void reDrawBoard(bool gameOver) {
    printf("\e[1;1H\e[2J");

    cout <<
         "TIC TAC TOE - Made by Khushraj\nPlayer one in X and Player two is O\n\n   |   |   \n " +
         toDraw.at(0) +
         " | " + toDraw.at(1) + " | " +
         toDraw.at(2) + " \n___|___|___\n   |   |   \n " + toDraw.at(3) + " | " + toDraw.at(4) + " | " +
         toDraw.at(5) +
         " \n___|___|___\n   |   |   \n " + toDraw.at(6) + " | " + toDraw.at(7) + " | " + toDraw.at(8) +
         " \n   |   |   \n\n";
    if (!gameOver) {
        cout << "Player " + to_string(playerTurn) + ", Enter a number: ";
    }

    /*
     * This prints (something similar to) -
     *
     * TIC TAC TOE - Made by Khushraj
     * Player one is X and Player two is O
     *
     *    |   |
     *  1 | 2 | 3
     * ___|___|___
     *    |   |
     *  4 | 5 | 6
     * ___|___|___
     *    |   |
     *  7 | 8 | 9
     *    |   |
     *
     * Player <1 || 2>, Enter a number:
     */
}

int check() { // 0 - Game in progress, 1 - Player one wins, 2 - Player two wins
    string one = toDraw[0];
    string two = toDraw[1];
    string three = toDraw[2];
    string four = toDraw[3];
    string five = toDraw[4];
    string six = toDraw[5];
    string seven = toDraw[6];
    string eight = toDraw[7];
    string nine = toDraw[8];

    //FOR PLAYER ONE
    // If the player has 3X in a row, then
    if ((one == "X" && two == "X" && three == "X") || (one == "X" && four == "X" && seven == "X") ||
        (one == "X" && five == "X" && nine == "X") || (seven == "X" && five == "X" && three == "X") ||
        (seven == "X" && eight == "X" && nine == "X") || (three == "X" && six == "X" && nine == "X") ||
        (four == "X" && five == "X" && six == "X") || (two == "X" && five == "X" && eight == "X")) {
        return 1;
    }

    //FOR PLAYER TWO
    // If the player has 3Y in a row, then
    if ((one == "O" && two == "O" && three == "O") || (one == "O" && four == "O" && seven == "O") ||
        (one == "O" && five == "O" && nine == "O") || (seven == "O" && five == "O" && three == "O") ||
        (seven == "O" && eight == "O" && nine == "O") || (three == "O" && six == "O" && nine == "O") ||
        (four == "O" && five == "O" && six == "O") || (two == "O" && five == "O" && eight == "O")) {
        return 2;
    }

    return 0;
}

void reset() {
    turnsPlayed = 0;
    toDraw = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
    playerTurn = 1;
}
