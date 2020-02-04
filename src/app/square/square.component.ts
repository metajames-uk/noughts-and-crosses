import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() status = '';
  @Input() finished;
  @Output() buttonSelected = new EventEmitter();

  selectedBox(): void {
    this.buttonSelected.emit();
    return;
  }
}
