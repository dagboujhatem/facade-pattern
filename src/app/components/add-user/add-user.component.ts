import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CrudFacade } from '../../services/crudFacade.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  template: `<div>
  <form *ngIf="userForm" [formGroup]="userForm" (ngSubmit)="createUser()"> 
    <input type="text" formControlName="firstName"> 
    <br> 
    <input type="text" formControlName="lastName"> 
    <br> 
    <input type="email" formControlName="email"> 
    <br> 
    <input type="password" formControlName="password"> 
    <br> 
    <input type="submit" value="Save"> 
  
  </form>
  <a routerLink="/users"> Back to users list </a>
  </div>`,
  styleUrl: './add-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserComponent implements OnInit { 
  userForm!: FormGroup;
  constructor(private _crudFacade: CrudFacade){
  }
  
  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
    });
  }
  createUser(){
    this._crudFacade.addUser(this.userForm?.value);
  }
}
