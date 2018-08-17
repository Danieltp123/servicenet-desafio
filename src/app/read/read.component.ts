import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['../../bootstrap.min.css','./read.component.css']
})
export class ReadComponent implements OnInit {
  
  clientes:Observable<any[]>;

  constructor(
    private angularFire: AngularFireDatabase,
    private _router: Router
  ) { 
    var user = firebase.auth().currentUser;
    if (!user) {
     this._router.navigate(['/']);
    }
    
  }
  updateItem(key: string, nome: string,fone: string) {
    this.angularFire.list('client').update(key, { name: nome,phone: fone });
  }
  deleteItem(key: string) {    
    this.angularFire.list('client').remove(key); 
  }
  ngOnInit() {
    this.clientes = this.angularFire.list('client').valueChanges();;
    console.log(this.clientes);
  }
 }


