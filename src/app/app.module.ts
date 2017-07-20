import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BlogPostComponent} from "./blogbase/blogPost/blogPost.component";
import {AppRoutingModule} from "./app-routing.module";
import {BlogPostService} from "./blogbase/blogPost/blogPost.service";
import {EditPostComponent} from "./blogbase/blogPost/editPost.component";
import {AuthorService} from "./blogbase/author/author.service";
import {AuthorComponent} from "./blogbase/author/author.component";
import {AuthorEditComponent} from "./blogbase/author/authorEdit.component";

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    EditPostComponent,
    AuthorComponent,
    AuthorEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BlogPostService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
