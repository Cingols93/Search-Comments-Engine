import { Component, Input } from '@angular/core';
import { Comment } from '../../../models/comment';

@Component({
  selector: 'app-comment-list-item',
  template: `
    <!--li class="list-group-item" >
     <b>Post ID:</b> {{comment?.postId}} <br> <b>ID:</b> {{comment?.id}} <br> <b> Name:</b> {{comment?.name}} <br> <b>Email:</b> {{comment?.email}} <br> <b> Description: </b>{{comment?.body}}
    </li-->
    <div class="col-md-8 m-auto">
      <div class="media g-mb-30 media-comment">
        <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div class="g-mb-15">
            <span class="g-color-gray-dark-v4 g-font-size-12">PostID: {{comment?.postId}} | ID: {{comment?.id}}</span>
            <h5 class="h5 g-color-gray-dark-v1 mb-0">{{comment?.name}}</h5>
            <span class="g-color-gray-dark-v4 g-font-size-12">{{comment?.email}}</span>
          </div>
          <p class="mb-0">{{comment?.body}}</p>
        </div>
      </div>
    </div>
    
  `
})
export class CommentListItemComponent {
  @Input() comment: Comment;
  
  constructor() { }
}
