import { Component, OnInit } from '@angular/core';
import {Game} from "../../types/game";
import {GameService} from "../../services/game.service";
import {DialogRef} from "@angular/cdk/dialog";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html'
})
export class AddGameComponent implements OnInit {
  game:Game;
  loadedFile: string = '';

  get edit(){
    return this.gameService.edit;
  }

  constructor(private gameService: GameService,
              public modalRef: DialogRef<AddGameComponent>) {
    this.game = this.gameService.game;
  }

  ngOnInit(): void {

  }

  saveGame(){
    console.log(this.game);
    //console.log(this.loadedFile);
    this.game.image = this.loadedFile;
    //console.log(this.game.image);
    if (this.gameService.edit){
      this.gameService.update(this.game)
          .subscribe((response) =>{
            this.modalRef.close();
          });
    }else {
      this.gameService.save(this.game).subscribe((response) =>{
        this.modalRef.close();
      });
    }
  }

  previewFile(event: any){
    const { target } = event;
    console.log(target.value);
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onloadend = (result) =>{
      this.loadedFile = result.target!.result + '';
    };
  }
}
