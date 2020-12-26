import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private userService:UsersService) { }

  get selectedUser(){
    return this.userService.selectedUser;
  }
   
  ngOnInit(): void {
  }

}
