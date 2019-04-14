import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Cat, GalleryCat} from '../../data/types';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-display-cat',
  templateUrl: './display-cat.component.html',
  styleUrls: ['./display-cat.component.scss']
})
export class DisplayCatComponent implements OnInit {

  private catsInGallery: GalleryCat[] = [];
  public today: number = Date.now();
  constructor( public catDataService: DataService, private title: Title) {
    this.title.setTitle('Cat Gallery Creator');
  }

  ngOnInit() {  }
  public newCat(): Cat {
    return this.catDataService.getCat();
  }
  public saveCat(catId: string, catUrl: string): void {
    // Get the current gallery
    this.catsInGallery = this.catDataService.catsInGallery.getValue();
    this.catsInGallery.push({id: catId, url: catUrl});
    // Update the gallery
    this.catDataService.updateGallery(this.catsInGallery);
    // Fetch a new cat
    this.catDataService.getCat();
    return;
  }
  public get numberOfCats() {
    return this.catDataService.catsInGallery.getValue().length;
  }
}
