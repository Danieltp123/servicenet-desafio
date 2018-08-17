import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  client:any;
  _router: any;

  constructor(private angularFire: AngularFireDatabase,) { 
    var user = firebase.auth().currentUser;
    if (!user) {
     this._router.navigate(['/']);
    }
    
  }

  ngOnInit() {
   this.client = this.angularFire.list('client');
   console.log(this.client.name);
   
   }
 }


