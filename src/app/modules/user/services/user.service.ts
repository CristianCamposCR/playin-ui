import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../types/user";
import {APP_URL} from "../../../services/base-url.app";
import {Personal} from "../../personal/types/personal";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  loading: boolean = false;
  private reader: User[] = [];
  edit: boolean = false;
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    role: 'user',
    status:1,
    person: {}
  };
  get users(){
    return [...this.reader];
  }

  constructor(private http: HttpClient) { }

  findAll(){
    this.loading = true;
    return this.http.get<User[]>(`${APP_URL}api/user`);
  }

  findAllPersons(){
    this.loading = true;
    return this.http.get<any>(`${APP_URL}api/person`);
  }
  save(user: User) {
    this.loading = true;
    return this.http.post<User>(`${ APP_URL }api/user/`, user);
  }

  update(user: User) {
    this.loading = true;
    return this.http.put<Personal>(`${ APP_URL }api/user/`, user);
  }

  changeStatus(user: User) {
    this.loading = true;
    return this.http.delete<Personal>(`${ APP_URL }api/user/`,
        { body: user });
  }
}

