import { Component, Input } from '@angular/core';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-comment-list',
  template: `
    <div *ngIf="comments && comments.length > 0">
      <div class="mb-3">
        <app-comment-list-item
          *ngFor="let comment of comments | paginate: { itemsPerPage: 20 ,currentPage:p };"
          [comment]="comment"
        ></app-comment-list-item>
      </div>
      <pagination-controls *ngIf="comments.length > 20" (pageChange) = "p = $event" class="text-center" ></pagination-controls>
    </div>

    <h2 *ngIf="comments && comments.length == 0" class="text-center font-weight-bold">
      No results
    </h2>

    `
})
export class CommentListComponent{
  @Input() comments: Comment[];
  p: number = 1;
  constructor() { }
}
