import {Component, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../../services/game.service";
import {Game} from "../../types/game";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {AddGameComponent} from "../add-game/add-game.component";

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html'
})
export class ListGameComponent implements OnInit {
  games: Game[] = [];
  game: Game;

  displayedColumns: string[] = [
    '#',
    'image',
    'name',
    'description',
    'price',
    'actions'
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  get isLoadong(){
    return this.gameService.loading;
  }
  constructor(private gameService: GameService,
              private _liveAnnouncer: LiveAnnouncer,
              public dialog: MatDialog) {this.game = this.gameService.game }

  ngOnInit(): void {
    this.getAllGame()
  }

  getAllGame() {
    this.gameService.findAll().subscribe((response) => {
      this.games = response;
      this.gameService.loading = false;
    });
  }

  announcerSortChange(sort: Sort) {
    if (sort.direction) {
      this._liveAnnouncer.announce(`Sorted ${sort.direction} ending`);
    } else {
      this._liveAnnouncer.announce(`Sort cleared`);
    }
  }




}
