import { Component, Input } from '@angular/core';

import { PLACEHOLDER_TEXT } from '../../utils';
import { tokenModel } from '../../models/token.model';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  placeholderText = PLACEHOLDER_TEXT;

  @Input() decodedToken: any;
  @Input() title: string;
  @Input() isReadonly: boolean;

  updateToken(data: string) {
    tokenModel.tokenData = data;
  }
}
