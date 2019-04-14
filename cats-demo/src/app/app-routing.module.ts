import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayCatComponent} from './content/display-cat/display-cat.component';
import {GalleryComponent} from './content/gallery/gallery.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayCatComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
