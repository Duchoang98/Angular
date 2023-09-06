import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'toggle',
  template: `<div
    class="toggle-wrapper"
    [class.checked]="checked"
    tabindex="0"
    (click)="toggle()"
  >
    <div class="toggle"></div>
  </div>`,
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent {
  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();

  toggle(){
    this.checked = !this.checked
    this.checkedChange.emit(this.checked)
  }
}
