import { Injectable } from '@angular/core';
import {Game} from "../types/game";
import {HttpClient} from "@angular/common/http";
import {APP_URL} from "../../../services/base-url.app";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  loading:  boolean = false;
  private plays: Game[] = [];
  edit: boolean = false;
  game: Game = {
    id: 0,
    name: '',
    description:'',
    image:'',
    price: 0.0,
    status:1
  }

  get games(){
    return[...this.plays];
  }
  constructor(private http: HttpClient) { }

  findAll(){
    this.loading = true;
    return this.http.get<Game[]>(`${APP_URL}api/game`);
  }

  save(game: Game){
    this.loading = true;
    return this.http.post<Game>(`${APP_URL}api/game`, game);
  }

  update(game:Game){
    this.loading = true;
    return this.http.put<Game>(`${APP_URL}api/game`,game);
  }

  changeStatus(game:Game){
    this.loading = true;
    return this.http.delete<Game>(`${APP_URL}api/game`,
        {body: game})
  }
}
