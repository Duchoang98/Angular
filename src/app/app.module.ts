import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HiComponent } from './hi/hi.component';
import { FormsModule } from '@angular/forms';
import { ProgessBarComponent } from './progess-bar/progess-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { ToggleComponent } from './toggle/toggle.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    ProgessBarComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    ToggleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
