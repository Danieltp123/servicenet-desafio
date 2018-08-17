import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
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
