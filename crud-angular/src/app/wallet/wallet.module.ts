import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { WalletRoutingModule } from './wallet-routing.module';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [WalletComponent],
  imports: [
    CommonModule,
    WalletRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class WalletModule { }
