import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import {AdminRoutingModule} from './admin-routing.module';



@NgModule({
  declarations: [DashboardComponent, UserComponent, GroupComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModuleModule { }
