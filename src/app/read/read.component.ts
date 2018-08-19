import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['../../bootstrap.min.css','./read.component.css']
})
export class ReadComponent implements OnInit {
  clientes =[];
  hero: any[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
  constructor(
    private angularFire: AngularFireDatabase,
    private _router: Router
  ) { 
    var user = firebase.auth().currentUser;
    if (!user) {
     this._router.navigate(['/']);
    }
    
  }
  updateCliente(key: string, nome: string,fone: string) {
    var postData = {
      name:nome,
      phone:fone
    };
    var updates = {};
    updates['/client/' + key] = postData;
    return firebase.database().ref().update(updates);
  }
  deleteCliente(key: string) {    
    this.angularFire.list('client').remove(key); 

  }
  clientesValores(){
    
  }
  ngOnInit() {
    var dataClientes =[];
    firebase.database().ref('client').on('value', function(snapshot) {
      dataClientes.push(snapshot.val());
    });
    this.clientes=dataClientes;    
    console.log(this.hero);
    
  }

 }

