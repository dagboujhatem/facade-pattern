import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CrudFacade } from '../../services/crudFacade.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  template: `<div>
  <p> update-user  <b>{{ (userFacade.selectedUser | async)?.id }}</b> </p>
  <form *ngIf="userForm" [formGroup]="userForm" (ngSubmit)="updateUser()"> 
  <input type="text" formControlName="firstName"> 
  <br> 
  <input type="text" formControlName="lastName"> 
  <br> 
  <input type="email" formControlName="email"> 
  <br> 
  <input type="password" formControlName="password"> 
  <br> 
  <input type="submit" value="Update"> 

</form>
<a routerLink="/users"> Back to users list </a>
</div>`,
  styleUrl: './update-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserComponent implements OnInit {
  @Input() id?: number;
  userForm!: FormGroup;

  constructor(public userFacade: CrudFacade) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
    });
    if (this.id) {
      this.userFacade.getUserById(this.id)
      .then(data => {
        if(data){
          this.userForm.patchValue(data)
        }
      });
    }
  }

  updateUser(){
    this.userFacade.updateUser(this.userForm?.value);
  }
}
