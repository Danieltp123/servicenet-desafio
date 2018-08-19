import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../bootstrap.min.css','./login.component.css',]
})
export class LoginComponent implements OnInit {
  user:any={
    email:'',
    password:''
  };

  constructor(
    public angularFireDataBase: AngularFireDatabase,
    private _router: Router
  ) { }

  ngOnInit() {

    
    
  }
  login(){
    console.log(this.user.email);
    firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.user.email, this.user.password).then((user) => {
        this._router.navigate(['crud']);
        console.log("logou")
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
    });
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
