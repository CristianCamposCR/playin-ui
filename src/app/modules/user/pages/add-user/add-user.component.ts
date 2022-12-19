import { Component, OnInit } from '@angular/core';
import {Person} from "../../../person/types/person";
import {User} from "../../types/user";
import {PersonService} from "../../../person/services/person.service";
import {DialogRef} from "@angular/cdk/dialog";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  user: User;
  person: any[] = [];


  constructor(private userService: UserService,
              public modalRef: DialogRef<AddUserComponent>) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    this.userService.findAllPersons()
        .subscribe((response)=>{
          this.person = response;
        });
  }

  saveUser(){
    console.log(this.user);
    if (this.userService.edit){
      this.userService.update(this.user)
          .subscribe((response)=>{
            this.modalRef.close();
          });
    }else{
      this.userService.save(this.user)
          .subscribe((response)=>{
            this.modalRef.close()
          });
    }
  }

}
