import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from './register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['../../bootstrap.min.css', './register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  name = '';
  phone = '';
  adress = '';
  adrNumber = '';
  zipCode = '';
  city = '';
  state = '';
  country = '';

  constructor(
    private _registerUserService: RegisterUserService
  ) { }

  ngOnInit() { }

  searchZipCode() {
    this._registerUserService.getLocationZipCode(this.zipCode.replace(/(\-)/g, ''))
      .subscribe(res => {

        if (res.json()['erro'] !== true) {
          this.state = res.json()['uf'];
          this.city = res.json()['localidade'];
          this.adress = res.json()['logradouro'];
        }

      }, err => {
        console.log('fudeu');
      });
  }

}
