import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { IUsers, IUser } from './user';

@Injectable()
export class TodoService {
  constructor(private http: Http) { }

    getUsers(): Observable<IUsers[]> {   
		return this.http.get("https://jsonplaceholder.typicode.com/users")
			.map(response => response.json())
			.catch(this.errorHandle);
	}

	getUser(id:number): Observable<IUser[]> {
		return this.http.get("https://jsonplaceholder.typicode.com/todos?userId=" + id)
			.map(response => response.json())
			.catch(this.errorHandle);
	}

	createTodo(data): Observable<IUser> { 
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});

		return this.http.post("https://jsonplaceholder.typicode.com/todos", JSON.stringify(data), options)
			.map(response => response.json())
			.catch(this.errorHandle);
	}

	updateTodo(data, id:number): Observable<IUser> {
		let headers = new Headers({ 'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});

		return this.http.put("https://jsonplaceholder.typicode.com/todos/" + id, JSON.stringify(data), options)
			.map(response => response.json())
			.catch(this.errorHandle);
	}

	deleteTodo(id:number) {
		return this.http.delete("https://jsonplaceholder.typicode.com/todos/" + id)
			.map(response => response.json())
			.catch(this.errorHandle);
	}

	errorHandle(error:any) { 
		return Observable.throw(error.json().error || 'Server error');
	}
}
