import { Component, ElementRef, QueryList, ViewChild, ViewContainerRef, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isChecked = true
  // showLast = true

}