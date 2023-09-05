import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentProgress = 70;
  title = 'angular100day';

  value = 'value';
  inputType = 'text';
  users = [
    {
      name: 'Hoang',
      age: 25,
    },
    {
      name: 'Duc',
      age: 26
    },
    {
      name: 'NGUYEN',
      age: 12
    },
    {
      name: 'Anh',
      age: 29
    }
  ];

  handler() {
    console.log('clicked');
  }

  isDanger = false;
  isWarning = false;

  classes = "box red-color yellow-background"
}
