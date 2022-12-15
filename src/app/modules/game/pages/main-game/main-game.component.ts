import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Game} from "../../types/game";
import {GameService} from "../../services/game.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {AddGameComponent} from "../add-game/add-game.component";

@Component({
    selector: 'app-main-game',
    templateUrl: './main-game.component.html'
})
export class MainGameComponent implements OnInit {
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
    game!: MatTableDataSource<Game>;

    get isLoading() {
        return this.gameService.loading;
    }

    constructor(private gameService: GameService,
                private _liveAnnouncer: LiveAnnouncer,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.getAllGame();
    }

    getAllGame() {
        this.gameService.findAll().subscribe((response) => {
            this.game = new MatTableDataSource<Game>(response);
            this.gameService.loading = false;
            this.game.paginator = this.paginator;
            this.game.sort = this.sort;
        });
    }

    announcerSortChange(sort: Sort) {
        if (sort.direction) {
            this._liveAnnouncer.announce(`Sorted ${sort.direction} ending`);
        } else {
            this._liveAnnouncer.announce(`Sort cleared`);
        }
    }

    openDialog(enterAnimaiton: string,
               exitAnimation: string) {
        const modalRef = this.dialog.open(AddGameComponent, {
            width: '60%',
            enterAnimationDuration: enterAnimaiton,
            exitAnimationDuration: exitAnimation,
            disableClose: true
        });
        modalRef.afterClosed().subscribe((result:any)=>{
            this.getAllGame();
            this.gameService.game = {
                id:0,
                name: '',
                description: '',
                price: 0.0,
                status: 1
            };
        });
    }

    editGame(game:any) {
        this.gameService.game = {
            ...game
        };
        this.gameService.edit = true;
        this.openDialog('2ms', '2ms');
    }

    changeStatus(game: Game){
        this.gameService.changeStatus(game).
        subscribe((response)=>{
            console.log(response);
            this.gameService.loading = false;
            this.getAllGame();
        });
    }

}
