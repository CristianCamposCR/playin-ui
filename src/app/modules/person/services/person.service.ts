import { Injectable } from '@angular/core';
import {Person} from "../types/person";
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../services/base-url.app";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  loading: boolean = false;
  private people: Person[] = [];
  edit: boolean = false;
  person: Person =  {
    id: 0,
    name: '',
    surname: '',
    lastname: '',
    birthday: '',
    username: '',
    email: '',
    password: '',
    role:'user',
    status: 1
  };

  get persons(){
    return [...this.people];
  }


  constructor(private http: HttpClient) { }

  findAll(){
    this.loading = true;
    return this.http.get<Person[]>(`${APP_URL}api/person/`);
  }

  save(person: Person){
    this.loading= true;
    return this.http.post<Person>(`${APP_URL}api/person`, person)
  }

  update(person:Person){
    this.loading= true;
    return this.http.put<Person>(`${APP_URL}/api/person`, person)
  }

}
