import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progess-bar',
  templateUrl: './progess-bar.component.html',
  styleUrls: ['./progess-bar.component.css'],
})
export class ProgessBarComponent implements OnInit {
  @Input() set progress(value: number){
    this._progress = value
    console.log(this._progress)
  }

  private _progress = 50;
  get progress(){
    return this._progress
  }
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {
    console.log({
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  ngOnInit(): void {
    console.log('init', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('changes',{
  //     progress: this.progress,
  //     backgroundColor: this.backgroundColor,
  //     progressColor: this.progressColor,
  //   })
  // }
}
