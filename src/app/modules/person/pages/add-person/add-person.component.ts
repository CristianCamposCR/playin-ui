import { Component, OnInit } from '@angular/core';
import {Person} from "../../types/person";
import {PersonService} from "../../services/person.service";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
import {AddUserComponent} from "../../../user/pages/add-user/add-user.component";
import {UserService} from "../../../user/services/user.service";

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html'
})
export class AddPersonComponent implements OnInit {
  person: Person;

  get edit(){
    return this.personService.edit;
  }
  constructor(private personService: PersonService,
              public dialog: MatDialog,
              public userService: UserService,
              public modalRef: DialogRef<AddPersonComponent>,) {
    this.person = this.personService.person;
  }

  ngOnInit(): void {

  }

  savePerson(){
    console.log(this.person);
    if (this.personService.edit){
      this.personService.update(this.person)
          .subscribe((response)=>{
            this.modalRef.close();
          });
    }else{
      this.personService.save(this.person)
          .subscribe((response)=>{
            this.modalRef.close();
          });
    }
  }

}
