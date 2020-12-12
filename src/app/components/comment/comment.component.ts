import { Component } from '@angular/core';
import { CommentsService } from '../../services/comments.service'

@Component({
  selector: 'app-comment',
  template: `
    <h1 class="text-center mt-2"> <img src="https://www.evemilano.com/wp-content/uploads/2016/11/angularjs-e1479300327497.png" width="100" height="100"> Search Comments Engine</h1>
    <app-comment-form 
      [postIds]="commentsService.postIds"
      [activeSearch]="commentsService.activeSearch"
      (search)="commentsService.searchHandler($event)" 
      (reset)="commentsService.resetHandler()"
    ></app-comment-form>
    
    <app-comment-list 
      [comments]="commentsService.comments" 
    ></app-comment-list>
`
})
export class CommentComponent {

  constructor(public commentsService: CommentsService) {
    commentsService.init();
  }

}
