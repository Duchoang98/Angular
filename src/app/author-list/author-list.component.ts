import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../authors.model';
@Component({
  selector: 'author-list',
  template: `<author-details
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)"
      (delete)="onDelete($event)"
    ></author-details>
    <br />
    <div>
      Current selected author : {{ currentAuthor.firstname }}
      {{ currentAuthor.lastname }}
    </div>`,
})
export class AuthorListComponent implements OnInit {
  name = 'duc Hoang';

  authors = authors;
  currentAuthor = authors[0];
  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id !== id;
    });

    if (this.currentAuthor.id == id) {
      this.currentAuthor = this.authors[0];
    }
  }

  constructor() {}
  ngOnInit() {}
}
