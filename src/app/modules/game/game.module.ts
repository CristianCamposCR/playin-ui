import {NgModule} from "@angular/core";
import {MainGameComponent} from "./pages/main-game/main-game.component";
import {AddGameComponent} from "./pages/add-game/add-game.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {materialModules} from "../../services/material.modules";
import { ListGameComponent } from './pages/list-game/list-game.component';

@NgModule({
    declarations:[
        MainGameComponent,
        ListGameComponent,
    ],
    imports: [CommonModule,FormsModule,...materialModules],
    exports: [MainGameComponent, ListGameComponent],
    bootstrap: [MainGameComponent],
})
export class GameModule{}