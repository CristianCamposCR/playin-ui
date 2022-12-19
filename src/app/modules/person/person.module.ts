import {NgModule} from "@angular/core";
import {MainGameComponent} from "../game/pages/main-game/main-game.component";
import {AddPersonComponent} from "./pages/add-person/add-person.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {materialModules} from "../../services/material.modules";

@NgModule({
    declarations: [
        AddPersonComponent
    ],
    imports: [CommonModule, FormsModule, ...materialModules],
    exports: [],
    bootstrap: []
})
export class PersonModule{}