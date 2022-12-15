import {NgModule} from "@angular/core";
import {MainGameComponent} from "./pages/main-game/main-game.component";
import {AddGameComponent} from "./pages/add-game/add-game.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {materialModules} from "../../services/material.modules";

@NgModule({
    declarations:[
        MainGameComponent,
    ],
    imports: [CommonModule,FormsModule,...materialModules],
    exports: [MainGameComponent],
    bootstrap: [MainGameComponent],
})
export class GameModule{}