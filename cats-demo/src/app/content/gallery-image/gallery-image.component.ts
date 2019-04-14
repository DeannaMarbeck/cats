import {Component, Input, OnInit} from '@angular/core';
import {GalleryCat} from '../../data/types';

@Component({
  selector: 'app-gallery-image',
  templateUrl: './gallery-image.component.html',
  styleUrls: ['./gallery-image.component.scss']
})
export class GalleryImageComponent implements OnInit {

  @Input('cat') cat: GalleryCat;
  constructor() { }

  ngOnInit() {
  }

}
