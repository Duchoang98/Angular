import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../authors.model';
@Component({
  selector: 'author-details',
  template: `
    <div>
      <strong>{{ author.firstname }} {{ author.lastname }}</strong>
      <button style="margin-left: 1rem" (click)="select.emit(author)">
        Select
      </button>
      <button style="margin-left: 1rem" (click)="delete.emit(author.id)">
        X
      </button>
    </div>
  `,
  styles: [``],
})
export class AuthorDetailsComponent implements OnInit {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
  constructor() {}
  ngOnInit() {}

  name = 'duc Hoang';
}
