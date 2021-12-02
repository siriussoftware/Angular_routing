import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeavesComponent} from "./components/leaves/leaves.component";
import {ApplyComponent} from "./components/apply/apply.component";
import {Page404leavesComponent} from "./components/page404leaves/page404leaves.component";

const routes: Routes = [
  {
    path: '', component: LeavesComponent, children: [
      {
        path: '', redirectTo: 'apply', pathMatch: 'full'
      },
      {
        path: 'apply', component: ApplyComponent
      },
      { path: 'balance', loadChildren: () => import(`src/app/modules/balance/balance.module`).then(m => m.BalanceModule) },

      { path: '**', component: Page404leavesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
