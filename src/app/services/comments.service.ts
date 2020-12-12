import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../model/comment';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  comments: Comment[];
  postIds: number[];
  activeSearch: Search;

  constructor(private http: HttpClient) {}

  init(): void{
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
      .subscribe(res => {
        this.comments = res;
        this.postIds = Array.from(new Set(this.comments.map(item => item.postId)));
      });
  }

  searchHandler(comment: Search): void {
    if (comment.text === "" || comment.text.length < 3 || comment.postId === 0) {
      this.init();
    } else {
      //Filtered list by postId
      this.comments = this.comments.filter(res => {
        return (res.name.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase())
          || res.body.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase())
          || res.email.toLocaleLowerCase().includes(comment.text.toLocaleLowerCase()))
          && res.postId == comment.postId;
      })
    }
  }

  resetHandler(): void {
    this.activeSearch = {} as Search;
    this.init();
  }





}