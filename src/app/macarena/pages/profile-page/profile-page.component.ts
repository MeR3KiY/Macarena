import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegService } from '../../services/reg.service';
import { CreateService } from '../../services/create.service';
import { User } from '../../models/userReg.model';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  friends = this.regService.getUsers();

  img: any = '';
  text: any = '';

  newText = '';

  user: User  = {  id: 0 };
  name: string = '';

  notificationText = '';
  userClick = false;
  privatePosts = false;
  privateCheckbox: boolean = false;
  editPostProp = false;

  regName = this.regService.getName(this.name);

  constructor(private route: ActivatedRoute,
              private create: CreateService,
              private regService: RegService) { }

  setTime() {
    const date = new Date();
    if (date.getHours() > 5 && date.getHours() < 12) {
      return ("Доброе утро, ");
    } else if (date.getHours() >= 12 && date.getHours() <= 16) {
      return ("Добрый день, ");
    } else {
      return ("Добрый вечер, ");
    }
};

  //Картинка юзера

  handleFiles(files: any) {
    for (let i = 0; i < this.img.length; i++) {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(files[i]);
      img.onload = function(src: any/*аргумент передаваться не должжен*/) {
        URL.revokeObjectURL(/*this.*/src);
      }
      document.body.appendChild(img);
    }
  }


  userImg() {
    //this.handleFiles(this.img);
    this.create.addImg(this.img);
  }

  getImg() {
    this.create.getImg()
  }

  //Создание поста
  createPost() {
    if (this.text == '') {
      return alert ('Напишите что-нибудь!');
    } else {
      this.create.addPost(this.text, this.privateCheckbox, this.user.id);
      console.log("Created!")
      this.postCleaner();
      this.postsList = this.create.getPost(this.user.id);
    }
  }

  postCleaner() {
    return this.text = ''
  }

  postsList: Post[] = [];

  //Упомянание пользователя
  showSent(name: string) {
    if (!this.userClick) {
      this.notificationText = name;
      this.userClick = true;
       setTimeout(() => {
        this.userClick = false;
      }, 5000);
    }
  }

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

  //Редактирование поста
  editPost() {
    if(!this.editPostProp) {
      this.newText = this.text;
      this.editPostProp = true;
    }
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    // this.usersService.getUser(id).subscribe....
    this.user = this.regService.getUser(id) as User;
    this.postsList = this.create.getPost(this.user.id);
  }

}
