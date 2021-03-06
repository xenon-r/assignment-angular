import { Injectable } from '@angular/core';
import { HttpClientUserService } from "../../core/services/http-client-user.service";
import { User } from "../../core/models/user";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProfileService implements Resolve<User[]>{
  users: User[] = [];

  constructor(private userService: HttpClientUserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
    
    let email = localStorage.getItem('email');
    let x = this.userService.searchUser(email!);
    return x;
  }
  
}
