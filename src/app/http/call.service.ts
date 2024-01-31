import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { CreateUserDto } from '../model/create-user-dto';
import { Message } from '../model/Message';
import { UpdateUserDto } from '../model/update-user-dto';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  private _baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this._baseUrl}/users`);
  }

  public addNewUser(payload: CreateUserDto): Observable<Message> {
    return this._http.post<Message>(`${this._baseUrl}/users`, payload);
  }

  public getUserById(id: number): Observable<User> {
    // template string `` 
    return this._http.get<User>(`${this._baseUrl}/users/${id}`); // this._baseUrl + '/users/' + id
  }

  public updateUserById(id: number, payload: UpdateUserDto): Observable<Message> {
    return this._http.put<Message>(`${this._baseUrl}/users/${id}`, payload);
  }

  public deleteUserById(id: number): Observable<Message> {
    return this._http.delete<Message>(`${this._baseUrl}/users/${id}`);
  }


}
