import { Injectable } from '@angular/core';
import { User } from '../models/userReg.model';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  users: User[] = []

  idGenerator(max: number) {
    return Math.floor(Math.random() * max);
  }


  addUser(mail: any, name: string, password: string, duplicate: string) {
    const newUser: User = {
      mail: mail,
      name: name,
      password: password,
      duplicate: duplicate,
      id: this.idGenerator(1000)
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
    const regMail = this.users.find(getMail => getMail.mail === mail);
    return regMail;
  }

  getPass(password: string) {
    const regPass = this.users.find(getPass => getPass.password === password);
    return regPass;
  }

  getName(name: string) {
    const regName = this.users.find(getName => getName.name === name);
    return regName;
  }

  constructor() { }

}
