import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "../../app.component";
import { MainPersonalComponent } from "../../modules/personal/pages/main-personal/main-personal.component";
import { SigninComponent } from "../../modules/auth/pages/signin/signin.component";
import { MainPositionComponent } from "../../modules/positions/main-position/main-position.component";
import {MainGameComponent} from "../../modules/game/pages/main-game/main-game.component";

const routes: Routes = [
  {
    path: "",
    component: MainPersonalComponent,
    pathMatch: "full",
  },
  {
    path: "game",
    component: MainGameComponent,
  },
  {
    path: "personal",
    component: MainPersonalComponent,
  },
  {
    path: "position",
    component: MainPositionComponent,
  },
  {
    path: "user",
    component: MainGameComponent,
  },
  {
    path: "auth",
    component: SigninComponent,
  },
  {
    path: "**",
    redirectTo: "",
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppRouterModule {}
