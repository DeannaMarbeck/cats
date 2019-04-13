import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayCatComponent} from './content/display-cat/display-cat.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayCatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
