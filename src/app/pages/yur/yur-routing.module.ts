import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YurComponent } from './yur.component';

const routes: Routes = [
  { path: '', component: YurComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YurRoutingModule { }
