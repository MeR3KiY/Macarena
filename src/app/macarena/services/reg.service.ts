import { Injectable } from '@angular/core';
import { User } from '../models/userReg.model';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  users: User[] = [
    {
      name: 'qwe',
      mail: 'qwe@qwe.ru',
      password: '1234',
      duplicate: '1234',
      id: 124
    },
    {
      name: 'zxc',
      mail: 'zxc@zxc.ru',
      password: '1234',
      duplicate: '1234',
      id: 123
    },
    {
      name: 'asd',
      mail: 'asd@asd.ru',
      password: '1234',
      duplicate: '1234',
      id: 122
    }
  ]



  idGenerator(max: number) {
    return Math.floor(Math.random() * max);
  }


  addUser(mail: any, name: string, password: string, duplicate: string, ) {
    const newUser: User = {
      mail: mail,
      name: name,
      password: password,
      duplicate: duplicate,
      id: this.idGenerator(1000),
    };
    if (mail == '' || name == '' || password == '' || duplicate =='') {
      return alert('Заполните все поля!')
    } else {
      this.users.push(newUser);
      console.log(this.users)
    }
  }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find(user => user.id === id);
    if (!user) {
      return {};
    }
    return user;
  }

  getMail(mail: string) {
    const user = this.users.find(user => user.mail === mail);
    return user;
  }

  getPass(password: string) {
    const user = this.users.find(user => user.password === password);
    return user;
  }

  getName(name: string) {
    const user = this.users.find(user => user.name === name);
    return user;
  }

  constructor() { }

}
