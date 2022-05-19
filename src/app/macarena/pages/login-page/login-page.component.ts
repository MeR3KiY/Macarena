import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegService } from '../../services/reg.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

//Material-parts//
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Введите корректный адрес';
    }

    return this.email.hasError('email') ? 'Некорректный адрес почты' : '';
  }

  hide = true;
//Material-parts' end//

//////////////////////////

  mail: string = '';
  password = '';

  regMail: any = {};
  regPass: any = {};

  constructor(private regService: RegService) { }

  login() {
    this.regMail = this.regService.getMail(this.mail);
    this.regPass = this.regService.getPass(this.password);
    if (this.mail == '' || this.password == '') {
      alert ("Введите все данные!");
      return
    } else if (this.regMail.mail == this.mail && this.regPass.password == this.password) {
      return alert("Success!")
    } else {
      return
    }
  }



  ngOnInit(): void {
    /*const id = this.route.snapshot.params['id'];
    this.user.regService.getUser(id);*/
  }

}
