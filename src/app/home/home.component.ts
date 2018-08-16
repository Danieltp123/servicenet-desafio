import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../bootstrap.min.css', './home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'servicenet-desafio';

  constructor(
    private _router: Router
  ) { }

  ngOnInit() { }

  navigateToRegister() {
    this._router.navigate(['/register']);
  }

  navigateToLogin() {
    this._router.navigate(['/login']);
  }


}
