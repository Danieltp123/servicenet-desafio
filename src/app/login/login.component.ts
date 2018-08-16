import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../bootstrap.min.css','./login.component.css',]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(){
    console.log("Blz logou");
  }
}
