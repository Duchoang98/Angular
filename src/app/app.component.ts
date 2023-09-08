import { Component, ElementRef, QueryList, ViewChild, ViewContainerRef, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // isChecked = true
  // showLast = true

  // @ViewChild(ToggleComponent, {static: true, read: ElementRef}) toggleComp: ToggleComponent;
  // @ViewChild('nameInput') nameInput : ElementRef<HTMLInputElement>;
  // @ViewChild('toggleButton', {static: true}) toggleButton : ElementRef<HTMLButtonElement>
  // @ViewChildren(ToggleComponent) toggleComps : QueryList<ToggleComponent>

  
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.nameInput.nativeElement.focus();
  //   }, 3000);
  //   console.log('onInit', this.toggleComp)
  //   console.log(this.toggleButton)
  // }
  // ngAfterViewInit(){
  //   console.log('toggleComps', this.toggleComps.changes.subscribe(console.log))

  // }

}
function someFunc(): void {

}

console.log(someFunc())

interface User {
  firstName: string
  lastName: string
  age?: number
}

type UserType = {
  firstName: string
  lastname: string
}

const user: User = {
  firstName: "hoang",
  lastName: "nguyen",
  age: 23
}

console.log(user)

abstract class BaseService<T> {
  protected model!: T;

  find(): T[] {
    return [this.model];
  }

  findOne(): T {
    return this.model
  }
}
interface Dog{
  bark(): void;
}

interface Cat {
  meow(): void;
}
class DogService extends BaseService<Dog> {}
class CatService extends BaseService<Cat> {}

const dogService = new DogService();
dogService.findOne().bark();
const catService = new CatService();
catService.findOne().meow()


function someType(): string | boolean {
  return true;
}

type ObjectDictionary<T> = { [key: string]: T };
type ArrayDictionary<T> = { [key: string]: T[] };
export type Dictionary<T> = T extends []
  ? ArrayDictionary<T[number]>
  : ObjectDictionary<T>;

type StringDictionary = Dictionary<string>; // {[key: string]: string}
type NumberArrayDictionary = Dictionary<number[]>; // {[key: string]: number[]}
// type UserEntity = Dictionary<User>; // {[key: string]: User}