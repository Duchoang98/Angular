import { Component, HostBinding, Input } from '@angular/core';

type flexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse'
@Component({
  selector: 'flex-component',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.css']
})
export class FlexComponent {
  @Input() flexDirection: flexDirection = 'row';

  @HostBinding('style.display') get display() {
    return 'flex';
  }

  @HostBinding('style.flex-direction') get direction() {
    return this.flexDirection;
  }
}
