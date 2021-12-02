import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { CasualComponent } from './components/casual/casual.component';
import { EarnedComponent } from './components/earned/earned.component';
import { Page404balanceComponent } from './components/page404balance/page404balance.component';
import { BalanceComponent } from './components/balance/balance.component';


@NgModule({
  declarations: [
    CasualComponent,
    EarnedComponent,
    Page404balanceComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ]
})
export class BalanceModule { }
