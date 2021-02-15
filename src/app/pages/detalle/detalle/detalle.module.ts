import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';

import { NgbDatepickerModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";

import { SwiperModule } from "ngx-swiper-wrapper";
import { ChartistModule } from "ng-chartist";




@NgModule({
  imports: [
    CommonModule,
    DetalleRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    SwiperModule,
    ChartistModule,
    NgbDatepickerModule
  ],
  exports: [],
  declarations: [
    DetalleComponent
  ],
  providers: [],
})
export class DetalleModule { }
