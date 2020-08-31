import { Component, OnInit, Input } from '@angular/core';

import { PLACEHOLDER_TEXT } from '../../utils';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent implements OnInit {
  placeholderText = PLACEHOLDER_TEXT;

  decodedToken: any;

  @Input() title: string;
  @Input() isReadonly: boolean;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    if (this.isReadonly) {
      this.tokenService.tokenEmitter.subscribe({
        next: (result: any) => {
          this.decodedToken = result;
          console.log(this.decodedToken);
        },
        error: (err: any) => console.log(err),
      });
    }
  }

  init() {

  }

  updateToken(data: string) {
    this.tokenService.setTokenData(data);
  }
}
