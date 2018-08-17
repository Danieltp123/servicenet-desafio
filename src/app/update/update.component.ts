import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  _router: any;

  constructor() { 
    var user = firebase.auth().currentUser;
    if (!user) {
     this._router.navigate(['/']);
    }
  }

  ngOnInit() {
  }

}
