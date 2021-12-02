import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './components/leaves/leaves.component';
import { ApplyComponent } from './components/apply/apply.component';
import { Page404leavesComponent } from './components/page404leaves/page404leaves.component';


@NgModule({
  declarations: [
    LeavesComponent,
    ApplyComponent,
    Page404leavesComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule
  ]
})
export class LeavesModule { }
