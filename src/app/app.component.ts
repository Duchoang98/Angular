import { Component, ElementRef, QueryList, ViewChild, ViewContainerRef, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  isChecked = true
  showLast = true

  @ViewChild(ToggleComponent, {static: true, read: ElementRef}) toggleComp: ToggleComponent;
  @ViewChild('nameInput') nameInput : ElementRef<HTMLInputElement>;
  @ViewChild('toggleButton', {static: true}) toggleButton : ElementRef<HTMLButtonElement>
  @ViewChildren(ToggleComponent) toggleComps : QueryList<ToggleComponent>

  
  ngOnInit() {
    setTimeout(() => {
      this.nameInput.nativeElement.focus();
    }, 3000);
    console.log('onInit', this.toggleComp)
    console.log(this.toggleButton)
  }
  ngAfterViewInit(){
    console.log('toggleComps', this.toggleComps.changes.subscribe(console.log))

  }

}
