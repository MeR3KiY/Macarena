import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  posts: Post[] = [];


  addPost(text: string) {
    const newPost: Post = {
      text: text,
      isPrivate: false,
    };
    this.posts.push(newPost)
  }

  getPost() {
    return this.posts;
  }

  getPrivate(isPrivate: boolean) {
    const profPrivate = this.posts.find(getPrivate => getPrivate.isPrivate === isPrivate);
    return profPrivate;
  }


  constructor() { }

}
