import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CrudFacade } from '../../services/crudFacade.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <div>
    <ul>
      @for (user of (userfacade.usersList | async); track user.id) {
        <li>{{ user.firstName }}</li>
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
    // this.getAllUsers();
  }




}
