import { Component } from '@angular/core';

import { TITLE_PASTE_TOKEN, TITLE_RESULT } from '../../utils';
import { TokenService } from '../../services/token/token.service';
import { tokenModel } from '../../models/token.model';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  readonly titlePasteTokenComponent = TITLE_PASTE_TOKEN;
  readonly titleResultComponent = TITLE_RESULT;

  decodedToken: any;

  constructor(
    private tokenService: TokenService,
    private filterService: FilterService
  ) {}

  submitButtonClicked() {
    this.tokenService.obtainToken(tokenModel.tokenData).subscribe(
      (decodedToken) => {
        tokenModel.parsedToken = Object.assign({}, decodedToken);
        this.decodedToken = Object.assign({}, decodedToken);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  filterValueChanged(data: string) {
    this.decodedToken = this.filterService.filterParsedToken(
      data,
      Object.assign({}, tokenModel.parsedToken)
    );
  }
}
