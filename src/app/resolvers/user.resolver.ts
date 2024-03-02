import { Injectable } from "@angular/core";
import { CrudFacade } from "../services/crudFacade.service";
import { Resolve } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any> {
  constructor(private _userfacade: CrudFacade) {}
  resolve(): void {
    return  this._userfacade.getAllUsers(); 
  }
}