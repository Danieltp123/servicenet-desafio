import { Component, OnInit, Testability } from '@angular/core';
import { Router } from '@angular/router';import { RegisterService } from './register.service';
import { RegisterService } from './register.service';
import { AngularFireDatabase } from 'angularfire2/database';


import * as firebase from 'firebase';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../bootstrap.min.css', './register.component.css']
})

export class RegisterComponent implements OnInit {
  user:any={
    name:'',
    email:'',
    password:''
  };

  constructor(
    public angularFireDataBase: AngularFireDatabase,
    private _router:Router
  ) { }

  ngOnInit() { }
  
  register(){

    console.log(this.user.email);

    firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((user) => {
          this._router.navigate(['crud']);
          console.log("logou")
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.messages;
        window.alert(errorCode);
    })
  }
  facebook(){
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((user) =>{
      this._router.navigate(['crud']);
        console.log("logou")
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
    });
  }
}