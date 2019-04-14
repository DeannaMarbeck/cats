import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayCatComponent } from './display-cat/display-cat.component';
import {SharedModule} from '../shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryImageComponent } from './gallery-image/gallery-image.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DisplayCatComponent,
    GalleryComponent,
    GalleryImageComponent
  ]
})
export class ContentModule { }
