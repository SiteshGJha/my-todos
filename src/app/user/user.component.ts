import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  todoList: any;
  constructor(private todoService:TodoService, private activatedRouter:ActivatedRoute) { }

  ngOnInit() { 
    return this.todoService.getUser(this.activatedRouter.snapshot.params["id"])
        .subscribe(data => this.todoList = data);
  }
}
