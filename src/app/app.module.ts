import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AppRouterModule } from './shared/routers/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ScreenComponent } from './shared/splash/screen/screen.component';
import { PersonalModule } from './modules/personal/personal.module';
import { AuthModule } from './modules/auth/auth.module';
import { materialModules } from './services/material.modules';
import { MainGameComponent } from './modules/game/pages/main-game/main-game.component';
import { AddGameComponent } from './modules/game/pages/add-game/add-game.component';
import { AddPersonComponent } from './modules/person/pages/add-person/add-person.component';
import { AddUserComponent } from './modules/user/pages/add-user/add-user.component';
import {ListGameComponent} from "./modules/game/pages/list-game/list-game.component";


@NgModule({
  declarations: [ NavigationComponent, AppComponent, ScreenComponent, MainGameComponent, AddGameComponent, AddPersonComponent, AddUserComponent, ListGameComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
    ...materialModules,
    PersonalModule,
    AuthModule,
  ],
  providers: [
  ],
  exports: [ AppComponent, NavigationComponent, ScreenComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
