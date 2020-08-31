import { Component, OnInit } from '@angular/core';

import { PLACEHOLDER_TEXT } from '../../utils';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  placeholderText = PLACEHOLDER_TEXT;

  constructor() { }

  ngOnInit() {
  }

}
