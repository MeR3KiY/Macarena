import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegService } from '../../services/reg.service';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})



export class RegPageComponent implements OnInit {
//Material-parts//

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

///////////////////////

  user: any = {};

  constructor(private route: ActivatedRoute ,private regService: RegService) { }

  ngOnInit(): void {
  }

  mail: string = '';
  name = '';
  password = '';
  duplicate = '';
  id = '';
  bDate!: Date;
  date: Date = new Date();



  regUser() {
    if (this.mail == '' || this.name == '' || this.password == '' || this.duplicate == '' || this.bDate == null) {
      console.log(typeof(this.date.getDate()))
      console.log(this.bDate)
      return alert ('Заполните все поля!')
    } else if (this.password !== this.duplicate) {
      return  alert ('Пароли не совпадают!')
    } else if (this.getErrorMessage() !== '') {
      return alert('Заполните адрес почты корректно!');
    } /*else if (+this.getBDate() - +this.formatDate() < 18) {
      return alert ("Иди учи уроки, сынок")
    }*/
    else {
    this.regService.addUser(this.mail, this.name,this.password, this.duplicate);

    this.regService.getUsers();
    this.cleaner();
    alert('Вы успешно прошли регистрацию!');
    console.log(this.date)


    }
  }

  cleaner() {
    this.mail ='';
    this.name = '';
    this.password = '';
    this.duplicate = '';
    this.bDate  = this.bDate;
  }

}
