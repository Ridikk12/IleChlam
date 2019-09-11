import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alcohol } from '../alcohol.class';

@Component({
  selector: 'app-alcohol-details',
  templateUrl: './alcohol-details.component.html',
  styleUrls: ['./alcohol-details.component.css']
})
export class AlcoholDetailsComponent implements OnInit {

  @Input() alcohol: Alcohol;
  constructor() { }

  ngOnInit() {

  }

  click() {
    this.alcohol.selected = !this.alcohol.selected;
  }

}
