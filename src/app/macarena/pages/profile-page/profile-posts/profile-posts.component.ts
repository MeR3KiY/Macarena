import { Component, OnInit, Input } from '@angular/core';
import { CreateService } from 'src/app/macarena/services/create.service';
import { Post } from 'src/app/macarena/models/post.model';
import { User } from 'src/app/macarena/models/userReg.model';



@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {

  constructor(private create: CreateService) { }

  privatePosts = false;

  editPostProp = false;

  postsList: Post[] = [];

  user: User  = {  id: 0 };

  //Кнопка "Личные"
  personalBtn() {
    if(this.privatePosts == false) {
      this.privatePosts = true;
      this.postsList = this.create.getPrivate(this.privatePosts, this.user.id);
    } else {
      this.privatePosts = false;
      this.postsList = this.create.getPost(this.user.id);
    }
  }

  ngOnInit(): void {
  }

}
