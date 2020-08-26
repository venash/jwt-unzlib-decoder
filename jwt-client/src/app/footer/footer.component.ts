import { Component, OnInit } from '@angular/core';

import { FOOTER_TEXT } from '../utils';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly footerText = FOOTER_TEXT;

  constructor() { }

  ngOnInit() {
  }

}
