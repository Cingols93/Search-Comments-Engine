import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment';
import { Search } from '../models/search';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comment[];
  postIds: number[];
  activeSearch: Search;
  allComments: Comment[];

  constructor(private http: HttpClient) {}

  init(): void{
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(res => {
        this.comments = res;
        this.allComments = res;
        this.postIds = Array.from(new Set(this.comments.map(item => item.postId)));
      });
  }

  searchHandler(comment: Search): void {
      //Filtered list by postId
      this.comments = this.allComments.filter(res => {
        return (res.name.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase())
          || res.body.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase())
          || res.email.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase()))
          && res.postId == comment.postId;
      })
  }

  resetHandler(): void {
    this.init();
  }

}