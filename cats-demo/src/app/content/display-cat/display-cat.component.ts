import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Cat, GalleryCat} from '../../data/types';

@Component({
  selector: 'app-display-cat',
  templateUrl: './display-cat.component.html',
  styleUrls: ['./display-cat.component.scss']
})
export class DisplayCatComponent implements OnInit {

  public catsInGallery: GalleryCat[] = [];
  constructor( public catDataService: DataService) {  }

  ngOnInit() {  }
  public newCat(): Cat {
    return this.catDataService.getCat();
  }
  public saveCat(catId: string, catUrl: string): void {
    this.catsInGallery.push({id: catId, url: catUrl});
    this.catDataService.updateGallery(this.catsInGallery);
    console.log(this.catsInGallery);
    return;
  }
}
