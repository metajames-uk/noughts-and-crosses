import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  turnIsX = true;
  title = 'noughts-and-crosses';
  squares = ['', '', '', '', '', '', '', '', ''];
  results = {
    x: [],
    o: []
  };

  calculateWin(turn) {
    console.log(turn);
  }

  buttonSelected(e) {
    this.squares[e] = this.turnIsX ? 'X' : 'O';
    this.calculateWin(e);
    this.turnIsX = !this.turnIsX;
  }
  newGame() {
    this.squares = ['', '', '', '', '', '', '', '', ''];
  }
}
