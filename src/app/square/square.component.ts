import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() status = '';
  @Output() buttonSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectedBox() {
    this.buttonSelected.emit();
  }
}
