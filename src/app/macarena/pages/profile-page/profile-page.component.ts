import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegService } from '../../services/reg.service';
import { CreateService } from '../../services/create.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  friends = this.regService.getUsers();

  text: any = '';

  user: any = {};
  name: string = '';

  userClick = false;

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

  createPost() {
    if (this.text == '') {
      return alert ('Напишите что-нибудь!');
    } else {
      this.create.addPost(this.text);
      console.log("Created!")
      this.postCleaner()
    }
  }

  postCleaner() {
    return this.text = ''
  }

  postsList = this.create.getPost();
  private: any = false;

  showSent() {
    if (!this.userClick) {
      this.userClick = true;
       setTimeout(() => {
        this.userClick = false;
      }, 5000);
    }
  }

  personalBtn() {
    this.private = this.create.getPrivate(this.private);
    if (this.private == false ) {
      return this.private = true;
    } else if (this.private == true) {
      return this.private = false
    }
    return console.log (this.private)
  }

  postFilter() {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    // this.usersService.getUser(id).subscribe....
    this.user = this.regService.getUser(id);
  }

}
