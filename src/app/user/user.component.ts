import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo-service.service';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../service/user';

import 'clarity-icons/shapes/essential-shapes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  todoList: any;
  todoText:string = "";
  constructor(private todoService:TodoService, private activatedRouter:ActivatedRoute) { }

  ngOnInit() { 
    return this.todoService.getUser(this.activatedRouter.snapshot.params["id"])
        .subscribe(data => this.todoList = data);
  }

  addTodo(){ //NOT Working ned to check
    this.todoService.createTodo(this.createData(this.todoText))
      .subscribe(data => console.log(data));
    this.todoText = "";
  }

  createData(text:string):IUser {
    let paramId = +this.activatedRouter.snapshot.params["id"];
    return  {
      'userId': paramId,
      'id': this.getId(paramId),
      'title': text,
      'completed': false
    };
  }

  getId(id:number) {
    return ++this.todoList[this.todoList.length - 1].id;
  }

  // onChecked(event) { 
  //   event.stopPropagation();
  //   console.log(event);
  // }

  // remove(id:number) {
  //   this.todoService.deleteTodo(id)
  //     .subscribe(data => console.log(data));
  // }
}
