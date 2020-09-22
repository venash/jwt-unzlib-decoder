import { Component, OnInit, Input } from '@angular/core';

import { TITLE_PASTE_TOKEN, TITLE_RESULT } from '../../utils';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
/*
TODO: tohle bude container, kde vyresime ruzne chovani a logiku
Tady si ulozime prichozi data a budeme je modifikovat
 */
export class ContentComponent implements OnInit {

  readonly titlePasteTokenComponent = TITLE_PASTE_TOKEN;
  readonly titleResultComponent = TITLE_RESULT;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit() {
  }

  submitButtonClicked() {
    /*
    TODO: a tady udelame subscribe
    rozsirime textareu tak aby brala input json data a ty nasetujeme odtud
     */
    this.tokenService.parseToken();
  }

}
