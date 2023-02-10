import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YurComponent } from './yur.component';
import { YurRoutingModule } from './yur-routing.module';



@NgModule({
  declarations: [
    YurComponent
  ],
  imports: [
    CommonModule,
    YurRoutingModule
  ],
  exports: [
    YurComponent
  ]
})
export class YurModule { }
