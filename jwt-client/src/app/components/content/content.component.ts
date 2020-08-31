import { Component, OnInit, Input } from '@angular/core';

import { TITLE_PASTE_TOKEN, TITLE_RESULT } from '../../utils';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  readonly titlePasteTokenComponent = TITLE_PASTE_TOKEN;
  readonly titleResultComponent = TITLE_RESULT;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit() {
  }

  submitButtonClicked() {
    this.tokenService.parseToken();
  }

}
