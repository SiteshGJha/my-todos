import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo-service.service';

import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import 'clarity-icons/shapes/travel-shapes';
import 'clarity-icons/shapes/social-shapes';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: any;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
  	this.todoService.getUsers().subscribe(
  		data => this.userList = data, 
  		error => { console.log(error)}
  	);
  }

  getAddress(id:number) {
      return this.userList.map(data => data).find(data => data.id === id).address; 
  }

  getAddressText(id:number) { 
      let address = this.getAddress(id);
      return `Address: ${address.suite} ${address.street} ${address.city} ${address.zipcode}`;
  }
}
