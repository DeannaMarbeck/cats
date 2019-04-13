import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCatComponent } from './display-cat/display-cat.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [DisplayCatComponent]
})
export class ContentModule { }
