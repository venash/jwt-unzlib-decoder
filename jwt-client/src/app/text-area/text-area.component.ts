import { Component, OnInit, Input } from '@angular/core';

import { PLACEHOLDER_TEXT } from '../utils';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  placeholderText = PLACEHOLDER_TEXT;

  @Input() title: string;
  @Input() isReadonly: boolean;

  constructor(
    private tokenService: TokenService
  ) { }

  ngOnInit() {
  }

  updateToken(data: string) {
    this.tokenService.setTokenData(data);
  }

}
