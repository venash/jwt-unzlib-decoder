import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  /*
  TODO: pokud neni potreba tak smaz constructor i ngOnInit() vsude
   */
  ngOnInit() {
  }

}
