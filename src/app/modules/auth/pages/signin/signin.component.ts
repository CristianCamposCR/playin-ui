import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { User } from "../../types/user";
import { Router } from "@angular/router";
import { LoginStateService } from "../../../../services/login-state.service";
import {AddGameComponent} from "../../../game/pages/add-game/add-game.component";
import {MatDialog} from "@angular/material/dialog";
import {AddPersonComponent} from "../../../person/pages/add-person/add-person.component";
import {PersonService} from "../../../person/services/person.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
})
export class SigninComponent {
  logoPath = "../../../../assets/img/img.png";
  get isLoading(){
    return this.authService.isLoading;
  }
  user: User = {
    email: "",
    password: "",
  };
  get session() {
    return this.loginState.isLogged;
  }

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private loginState: LoginStateService,
    public dialog: MatDialog,
    private personService: PersonService
  ) {
    this.loginState.setIsLogged = !!localStorage.getItem("token");
    if (!this.loginState.isLogged) this.router.navigateByUrl("/");
  }

  signin() {
    this.authService.login(this.user);
  }

  openDialog(enterAnimaiton: string,
             exitAnimation: string) {
    const modalRef = this.dialog.open(AddPersonComponent, {
      width: '60%',
      enterAnimationDuration: enterAnimaiton,
      exitAnimationDuration: exitAnimation,
      disableClose: true
    });
    modalRef.afterClosed().subscribe((result:any)=>{
      //this.getAllGame();
      this.personService.person = {
        id:0,
        name: '',
        surname: '',
        lastname: '',
        birthday: ''
      };
    });
  }
}
