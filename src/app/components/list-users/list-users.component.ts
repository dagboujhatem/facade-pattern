import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CrudFacade } from '../../services/crudFacade.service';

@Component({
  selector: 'app-list-users',
  template: `
  <div>
  <a routerLink="/users/add"> create new user </a>
    <ul>
      @for (user of (userfacade.usersList | async); track user.id) {
        <li>{{ user.firstName }}</li>
        <button [routerLink]="['/users/update/', user.id]">Update</button>
        <button (click)="deleteUser(user.id)">Delete</button>
      }
    </ul>
  </div>`,
  styleUrl: './list-users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListUsersComponent implements OnInit {

  constructor(public userfacade: CrudFacade) {

  }

  ngOnInit(): void {
    // this.userfacade.getAllUsers(); // J'amais on appel subscribe (dans le composant)
  }


  deleteUser(id: number){
    this.userfacade.deleteUser(id)
    .then(result => {
      // refresh list of users
    })
    .catch(error => {});
  }


}
