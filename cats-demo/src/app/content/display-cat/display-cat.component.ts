import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data/data.service';
import {Cat} from '../../data/types';

@Component({
  selector: 'app-display-cat',
  templateUrl: './display-cat.component.html',
  styleUrls: ['./display-cat.component.scss']
})
export class DisplayCatComponent implements OnInit {

  constructor( public catDataService: DataService) {  }

  ngOnInit() {  }
  public newCat(): Cat {
    return this.catDataService.getCat();
  }
}
