import { Injectable } from '@angular/core';
import { HttpClientUserService } from "../../core/services/http-client-user.service";
import { User } from "../../core/models/user";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetUsersService implements Resolve<User[]>{
  // users: User[] = [];
  // user!: User;
  // user1 = {id:1, firstName:"firstName", lastName:"lastName", email:"email", password:"password", 
  //   role:"", dob:'', gender:'', interest:'',address:'', phone:'' }
  constructor(private userService: HttpClientUserService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {

    let x = this.userService.getUsers();
    return x;
  }
  
}
