import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseAuth } from 'angularfire2';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../bootstrap.min.css','./login.component.css',]
})
export class LoginComponent implements OnInit {
  email = '';
  password =''; 

  constructor(
    public angularFireDataBase: AngularFireDatabase,
   
  ) { }

  ngOnInit() {
  }
  login(){
   
  }
}
