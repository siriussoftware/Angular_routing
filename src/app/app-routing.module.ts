import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AttendanceComponent} from "./components/attendance/attendance.component";
import {Page404Component} from "./components/page404/page404.component";


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'leaves2', loadChildren: () => import(`src/app/modules/leaves/leaves.module`).then(m => m.LeavesModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
