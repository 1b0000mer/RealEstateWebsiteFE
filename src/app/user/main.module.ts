import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutModule } from '../layouts/user/main-layout.module';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MainLayoutModule,
    MainRoutingModule,

  ]
})
export class MainModule { }
