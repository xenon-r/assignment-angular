import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [UserComponent, UserListComponent, UserProfileComponent, UpdateProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    DatePickerModule,
    JwPaginationModule
  ]
})
export class UserModule { }
