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
  public today: number = Date.now();
  constructor( public catDataService: DataService) {  }

  ngOnInit() {  }
  public newCat(): Cat {
    return this.catDataService.getCat();
  }

  public saveCat(catId: string, catUrl: string): void {
    this.catsInGallery = this.catDataService.catsInGallery.getValue();
    this.catsInGallery.push({id: catId, url: catUrl});
    this.catDataService.updateGallery(this.catsInGallery);
    this.catDataService.getCat();
    console.log(this.catsInGallery);
    return;
  }
}
