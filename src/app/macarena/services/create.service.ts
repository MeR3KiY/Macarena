import { Injectable } from '@angular/core';
import { Avatar } from '../models/avatar.model';
import { Post } from '../models/post.model';
import { RegService } from './reg.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  posts: Post[] = [];

  //Картинка пользователя
  avatar: Avatar[] = [];

  addImg(img: File) {
    const newImg: Avatar = {
      img: img,
    };
    this.avatar.push(newImg);
    console.log("Arbaiten")
  }

  getImg() {
    console.log(this.avatar)
    return this.avatar;
  }
  //

  //Добавление поста
  addPost(text: string, isPrivate: boolean, userId: number) {
    const newPost: Post = {
      text: text,
      isPrivate: isPrivate,
      userId: userId,
    };
    this.posts.push(newPost)
  }

  //Получение поста
  getPost(userId: number) {
    return this.posts.filter(post => post.userId === userId);
  }

  //Проверка на приватность
  getPrivate(isPrivate: boolean, userId: number) {
    const privatePosts = this.posts.filter(post => post.isPrivate === isPrivate && post.userId === userId);  //Find возвращает эл-т массива
    return privatePosts;
  }

  constructor(private reg: RegService) { }

}
