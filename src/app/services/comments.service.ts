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

  constructor(private http: HttpClient) { }

  init(): void {
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(res => {
        this.comments = res;
        this.postIds = Array.from(new Set(this.comments.map(item => item.postId)));
      });
  }

  searchHandler(comment: Search): void {
    this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${comment.postId}`)
      .subscribe(comments => {
        this.comments = comments.filter(res => {
          return (res.name.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase())
            || res.body.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase())
            || res.email.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase()));
        });
      });
  }

  resetHandler(): void {
    this.init();
  }

}
