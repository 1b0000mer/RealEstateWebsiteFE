import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginModule } from './plugin.module';



@NgModule({
  declarations: [],
  imports: [
    PluginModule
  ],
  exports: [
    PluginModule
  ]
})
export class SharedModule { }
