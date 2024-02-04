import { Injectable } from '@angular/core';
import { CallService } from '../http/call.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class CrudFacade {
  // State managment in Angular (Rxjs, NgRx)
  // Rxjs: Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject: data service
  public usersList: BehaviorSubject<User[] | null> = new BehaviorSubject<User[] | null >(null);


  constructor(private _callService: CallService) { }

  public getAllUsers() {
    if (this.usersList.getValue() === null) {
      this._callService.getAllUsers()
        .subscribe((response: User[]) => {
          // this.userList = response;
          // const v = 4;
          this.usersList.next(response); // change the current value (publish value)
        });
    } 
  }

}
