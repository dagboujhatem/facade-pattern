import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CrudFacade } from '../../services/crudFacade.service';

@Component({
  selector: 'app-update-user',
  template: `<p>update-user  <b>{{ userFacade.selectedUser | async }}</b> </p>`,
  styleUrl: './update-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateUserComponent implements OnInit { 
  @Input() id?: number;

  constructor(public userFacade: CrudFacade){}

  ngOnInit(): void {
    if(this.id){
      this.userFacade.getUserById(this.id);
    }
  }
}
