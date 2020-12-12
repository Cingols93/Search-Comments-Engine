import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    CommentListComponent,
    CommentFormComponent,
    CommentListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
