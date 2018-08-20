import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['../../bootstrap.min.css','./read.component.css']
})
export class ReadComponent implements OnInit {
  clientes: Observable<{}[]>;

  constructor(
    private angularFire: AngularFireDatabase,
    private _router: Router
  ) { 
    var user = firebase.auth().currentUser;
    if (!user) {
     this._router.navigate(['/']);
    }
    
  }

  updateCliente(cliente:any) {
    var ref =this.angularFire.list("client");
    ref.set(cliente.key, { 
      key: cliente.key,
      name: cliente.name,
      phone: cliente.phone,
      adress: cliente.adress,
      zipCode: cliente.zipCode,
      country: cliente.country,
      state: cliente.state,
      city: cliente.city,
      adrNumber: cliente.adrNumber
     });
    
  }
  
  deleteCliente(client:any) {    
    this.angularFire.list('client').remove(client.key); 
  }


  ngOnInit() {

    

    this.clientes = this.angularFire.list('client').valueChanges();
    
    console.log(this.clientes);
    
    
  }

 }

