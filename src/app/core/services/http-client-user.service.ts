import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from './user.service';
 
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
 
@Injectable()
 
export class HttpClientUserService extends UserService {
  
  constructor(private http: HttpClient) {
    super();
   }
   
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.UsersUrl).pipe(
      catchError(this.handleError)
    );
  }
 
  // get by id - will 404 when id not found
  getUser(id: number): Observable<User> {
    const url = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError)
    );
  }
 
  addUser(firstName: string, lastName: string, email: string, password: string, role: string): Observable<User> {
    const user = {id:(User.count+1), firstName:firstName, lastName:lastName, email:email, password:password, 
      role:role, dob:'', gender:'', interest:'',address:'', phone:'' }
    let x = this.http.post<User>(this.UsersUrl, user, cudOptions).pipe(
      
      catchError(this.handleError)
      
    );
    User.count = User.count + 1;
    return x;
  }
 
  deleteUser(email: number): Observable<User> {
    const url = `${this.UsersUrl}/${email}`;
    return this.http.delete<User>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  searchUser(term: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.UsersUrl}/?email=${encodeURIComponent(term)}`).pipe(

      catchError(this.handleError)
    )
  }
 
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.UsersUrl, user, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
   
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
 
}