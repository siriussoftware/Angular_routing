import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BalanceComponent} from "./components/balance/balance.component";
import {CasualComponent} from "./components/casual/casual.component";
import {EarnedComponent} from "./components/earned/earned.component";
import {Page404balanceComponent} from "./components/page404balance/page404balance.component";

const routes: Routes = [
  {
    path: '', component: BalanceComponent, children: [
      {
        path: '', redirectTo: 'casual', pathMatch: 'full'
      },
      {
        path: 'casual', component: CasualComponent
      },
      {
        path: 'earned', component: EarnedComponent
      },

      { path: '**', component:  Page404balanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule { }
