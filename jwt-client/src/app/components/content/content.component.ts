import { Component } from '@angular/core';

import { TITLE_PASTE_TOKEN, TITLE_RESULT } from '../../utils';
import { TokenService } from '../../services/token/token.service';
import { tokenStorage } from '../../models/token.storage';
import { FilterService } from 'src/app/services/filter/filter.service';
import { catchError, take } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Token } from '../../models/token.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  readonly titlePasteTokenComponent = TITLE_PASTE_TOKEN;
  readonly titleResultComponent = TITLE_RESULT;

  decodedToken: any;
  lastFilterData: string;
  hasError = false;

  constructor(
    private tokenService: TokenService,
    private filterService: FilterService
  ) {}

  submitButtonClicked() {
    this.tokenService
      .obtainToken(tokenStorage.tokenData)
      .pipe(
        catchError((err) => {
          this.hasError = true;
          return throwError(err);
        }),
        take(1)
      )
      .subscribe((decodedToken) => {
        tokenStorage.parsedToken = Object.assign({}, decodedToken);
        this.decodedToken = Object.assign({}, decodedToken);
        this.hasError = false;
        if (decodedToken.fullName) {
          this.filterValueChanged(this.lastFilterData);
        }
      });
  }

  filterValueChanged(data: string) {
    this.decodedToken = this.filterService.filterParsedToken(
      data,
      Object.assign({}, tokenStorage.parsedToken)
    );
    this.lastFilterData = data;
  }
}
