import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['../../bootstrap.min.css','./crud.component.css']
})
export class CrudComponent implements OnInit {
  

  constructor(private _router: Router
  ) { 
    
  }

  ngOnInit() {
  }
  navigateToCreate(){
    this._router.navigate(['/create']);
  }
  navigateToRead(){
    this._router.navigate(['/read']);
  }
  navigateToUpdate(){
    this._router.navigate(['/update']);
  }
  navigateToDelete(){
    this._router.navigate(['/delete']);
  }
}
