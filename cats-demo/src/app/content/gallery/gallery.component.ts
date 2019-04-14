import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor( public catDataService: DataService, private title: Title) {
    this.title.setTitle('Cat Gallery');
  }

  ngOnInit() {
  }

}
