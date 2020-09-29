import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PLACEHOLDER_TEXT } from '../../utils';
import { tokenStorage } from '../../models/token.storage';

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
  @Input() isError = false;
  @Output() isErrorChange = new EventEmitter<boolean>();

  updateToken(data: string) {
    tokenStorage.tokenData = data;
    if (this.isError) {
      this.isError = false;
      this.isErrorChange.emit(false);
    }
  }
}
