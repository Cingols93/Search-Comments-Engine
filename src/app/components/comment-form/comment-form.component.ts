import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Search } from '../../model/search';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment-form',
  template: `
  <div class="container">
    <form #f="ngForm" (submit)="searchHandler(f)">
      <div class="form-group">
        <input class="form-control" placeholder="Search by name, email and body (min 3 char)" id="text" type="text" name="text" [ngModel]= "activeSearch?.text" minlength = "3" required>
      </div>
      <div class="form-group">
        <select class="form-control" name="postId" placeholder="Select post id" [ngModel]= "activeSearch?.postId" required>
          <option value="0" disabled [ngValue]="null">Select post id</option>
          <option *ngFor="let postId of postIds" [ngValue]= "postId"> {{postId}}</option>
        </select>
      </div>
      <div class="form-group">
      <button id="searchButton" class="btn btn-primary mr-2" type="submit" [disabled]="f.invalid">
        <i class="fa fa-search"></i>
        Search
      </button>
      <button id="resetButton" class="btn btn-secondary" type="button" (click)= "resetHandler(f)">  <i class="fa fa-times"></i> Clear</button>
      </div>
    </form>
  </div>
  `
})
export class CommentFormComponent {
  @ViewChild('f', { static: true }) form: NgForm;
  @Input() postIds: number[];
  @Input() activeSearch: Search;
  @Output() search: EventEmitter<Comment> = new EventEmitter<Comment>();
  @Output() reset: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  searchHandler(f: NgForm): void {
    this.search.emit(f.value);
  }

  resetHandler(f: NgForm): void {
    this.reset.emit();
    f.reset();
  }

}
