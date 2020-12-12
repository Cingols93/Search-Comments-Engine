import { Component, Input } from '@angular/core';
import { Comment } from '../../model/comment';

@Component({
  selector: 'app-comment-list-item',
  template: `
    <li class="list-group-item" >
     <b>Post ID:</b> {{comment?.postId}} <br> <b>ID:</b> {{comment?.id}} <br> <b> Name:</b> {{comment?.name}} <br> <b>Email:</b> {{comment?.email}} <br> <b> Description: </b>{{comment?.body}}
    </li>
  `
})
export class CommentListItemComponent {
  @Input() comment: Comment;
  
  constructor() { }
}
