import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegService } from '../../services/reg.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

//Material-parts//


  getErrorMessage() {

    if (this.loginGroup.controls['email'].hasError('required')) {
      return 'Введите корректный адрес';
    }

    return this.loginGroup.get('email')?.hasError('email') ? 'Некорректный адрес почты' : '';
  }

  hide = true;
//Material-parts' end//

//////////////////////////

loginGroup = new FormGroup({
  password: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email])
})

  regMail: any = {};
  regPass: any = {};

  constructor(private regService: RegService, private router: Router) { }

  login() {
    if (this.loginGroup.invalid) {
      return alert ("Заполните форму корректно!")
    }

    const formValue = this.loginGroup.value;

    this.regMail = this.regService.getMail(formValue.email);

    if (!this.regMail) {
      return alert ('Пользователя не существует!')
    }

    if (this.regMail.mail == formValue.email && this.regMail.password == formValue.password) {
      this.router.navigateByUrl(`/profile/${this.regMail.id}`);
    }

  }



  ngOnInit(): void {
    /*const id = this.route.snapshot.params['id'];
    this.user.regService.getUser(id);*/
  }

}
