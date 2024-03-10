import { Injectable } from '@angular/core';
import { CallService } from '../http/call.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/User';
import { CreateUserDto } from '../model/create-user-dto';
import { Message } from '../model/Message';
import { Router } from '@angular/router';
import { UpdateUserDto } from '../model/update-user-dto';

@Injectable({
  providedIn: 'root'
})
export class CrudFacade {
  // State managment in Angular (Rxjs, NgRx): Signle Point of truth (Redux)
  // Rxjs: Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject, Promise: data service
  // Angular Signal: angular way (Angular 16+)
  // Akita: state mangement
  public usersList: BehaviorSubject<User[] | null> = new BehaviorSubject<User[] | null>(null);
  public selectedUser: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);


  constructor(private _callService: CallService, private _router: Router) { }

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

  public addUser(data: CreateUserDto) {
    this._callService.addNewUser(data)
      .subscribe((messsage: Message) => {
        // Toast Message 
        // Route redirection 
        this._router.navigateByUrl('/users')
      })
  }

  public deleteUser(id: number) {
    // using Promise : to return a value after deleting with success
    // reject: return with error
    // resolve: return with success
    return new Promise(( resolve, reject) => {
      this._callService.deleteUserById(id)
        .subscribe((messsage: Message) => {
          // Toast message
          // filter new list (in order to refresh the list)
          const newList = this.usersList.getValue()?.filter((u) => u.id !== id);
          if (newList) {
            this.usersList.next(newList)
          }
          // return sous la forme Promise (resolve)
          resolve(true); // declance .then
        }, (error: any) => {
          // error
          reject(false); // declance .catch
        });
    });
  }

  getUserById(id: number) {
    // 1st way 
    // this._callService.getUserById(id)
    // .subscribe((user: User) => {
    //   // Toast Message 
    //   // Route redirection 
    //   this.selectedUser.next(user);
    // })

    // 2nd way (recommended if we have same data in the list) 
    return new Promise(( resolve, reject) => {
      const user = this.usersList.getValue()?.filter((u) => u.id === id);
      if (user && user[0]) {
        this.selectedUser.next(user[0])
        resolve(user[0])
      }
    });
  }

  public updateUser(data: UpdateUserDto) {
    this._callService.addNewUser(data)
      .subscribe((messsage: Message) => {
        // Toast Message 
        // Route redirection 
        this._router.navigateByUrl('/users')
      })
  }
}
