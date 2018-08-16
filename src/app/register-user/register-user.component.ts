import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from './register-user.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['../../bootstrap.min.css', './register-user.component.css']
})

export class RegisterUserComponent implements OnInit {

  name = '';
  email = '';
  password = '';


  constructor(
    private _registerUserService: RegisterUserService,
    public angularFireDataBase: AngularFireDatabase
  ) { }

  ngOnInit() { }
  register(){
    
    this.angularFireDataBase.list('user').push({
      nome: this.name,
      email: this.email,
      password: this.password
    })
  }

}
