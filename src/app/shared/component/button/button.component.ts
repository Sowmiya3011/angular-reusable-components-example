import { Component, EventEmitter, Input, Output, VERSION } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.css' ]
})
export class ButtonComponent  {
  @Input() label: string;
  @Output() onClick = new EventEmitter<any>();

onClickButton(event: any) {
    this.onClick.emit(event);
  }
}
