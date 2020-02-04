import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  winnerIsX = null;
  turnIsX = true;
  title = 'noughts-and-crosses';
  squares = ['', '', '', '', '', '', '', '', ''];
  winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];
  indecesX = [];
  indecesO = [];

  newGame() {
    this.squares = ['', '', '', '', '', '', '', '', ''];
    this.turnIsX = true;
    this.winnerIsX = null;
    this.indecesO = [];
    this.indecesX = [];
  }

  buttonSelected(e) {
    this.squares[e] = this.turnIsX ? 'X' : 'O';
    this.turnIsX ? this.indecesX.push(e) : this.indecesO.push(e);
    this.checkWin(this.turnIsX ? this.indecesX : this.indecesO);
    this.turnIsX = !this.turnIsX;
  }

  checkWin(arr) {
    this.winningCombos.forEach((winner, index) => {
      if (
        arr.indexOf(winner[0]) !== -1 &&
        arr.indexOf(winner[1]) !== -1 &&
        arr.indexOf(winner[2]) !== -1
      ) {
        this.winnerIsX = this.turnIsX ? true : false;
        return;
      }
    });
  }
}
