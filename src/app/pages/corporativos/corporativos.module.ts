import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { CorporativosRoutingModule } from './corporativos-routing.module';
import { CorporativosComponent } from './corporativos.component';


@NgModule({
  imports: [
    CommonModule,
    CorporativosRoutingModule
  ],
  exports: [],
  declarations: [
    CorporativosComponent
  ],
  providers: [],
})
export class CorporativosModule { }
