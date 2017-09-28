import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

		setUser() {}

		errorHandle(error:any) {
			return Observable.throw(error.json().error || 'Server error');
		}
}
