import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_PATH } from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  /*
  TODO:
  Oddelit do jine servisy, a nejlepe smazat, Neni to vubec potreba. Tuto servisu nechat pouze na to
  aby ziskala data ze serveru a vratila json data
   */
  private tokenData: string;
  private parsedTokenData: any;

  /*
  TODO: Lepsi pouzit Subject.
   V pripade ze by jsi mel inithodnotu tak BehaviorSubject
   */
  @Output()
  tokenEmitter: EventEmitter<string> = new EventEmitter();

  /*
  TODO: doporucuji pojemnovat pouze http
   */
  constructor(private httpService: HttpClient) {}

  getTokenData(): string {
    return this.tokenData;
  }

  setTokenData(data: string): void {
    this.tokenData = data;
  }

  /*
  TODO:
  tuto metodu pojmenuj pouze obtainToken a nech at vraci Observable<any>, subscribe vyresime jinde
   */
  parseToken(): void {
    const tokenJson = JSON.stringify({
      token: this.tokenData,
    });

    this.httpService.post<any>(SERVER_PATH, tokenJson).subscribe({
      next: (data: any) => {
        if ('decodedToken' in data) {
          console.log(data);
          this.parsedTokenData = JSON.parse(data.decodedToken);
          this.tokenEmitter.emit(this.parsedTokenData);
        } else {
          this.parsedTokenData = data;
          this.tokenEmitter.emit(this.parsedTokenData);
        }
      },
    });
  }

}
