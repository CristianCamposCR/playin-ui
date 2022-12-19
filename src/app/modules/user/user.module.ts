import {NgModule} from "@angular/core";
import {AddUserComponent} from "./pages/add-user/add-user.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {materialModules} from "../../services/material.modules";

@NgModule({
    declarations: [
        AddUserComponent
    ],
    imports: [CommonModule, FormsModule, ...materialModules],
    exports: [],
    bootstrap: [],
})
export class UserModule{}