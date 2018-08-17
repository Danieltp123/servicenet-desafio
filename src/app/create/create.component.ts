import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';
import {  AngularFireDatabase } from 'angularfire2/database';
import {  Router } from '@angular/router';





@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../../bootstrap.min.css','./create.component.css']
})
export class CreateComponent implements OnInit {
  locale:any ={
    adress: '',
    zipCode: '',
    country: '',
    state: '',
    city: '',
    adrNumber: ''
  }
  cliente:any ={
    id:'',
    name: '',
    phone: ''
  }


  constructor(
    private _registerService: RegisterService,
    private angularFire: AngularFireDatabase,
    private _router: Router
  ) {}

  ngOnInit() {
  }

  searchZipCode() {
    this._registerService.getLocationZipCode(this.locale.zipCode.replace('-', ''))
      .subscribe(res => {
        console.log(res.json());
        
        this.locale.adress = res.json()['logradouro']; 
        this.locale.state = res.json()['uf'];
        this.locale.city = res.json()['localidade'];
      }, err => {

      });
  }
  create(){
    this.angularFire.list("Client").push({
      nome: this.cliente.name,
      telefone: this.cliente.phone,
      adress: this.locale.adress,
      zipCode: this.locale.zipCode,
      country: this.locale.country,
      state: this.locale.state,
      city: this.locale.city,
      adrNumber: this.locale.adrNumber
    }).then((t: any) =>{
      console.log("dados gravados:"+t.key)
      this._router.navigate(['cruds']);
    });   
    
  }
}
