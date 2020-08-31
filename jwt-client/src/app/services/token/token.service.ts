import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SERVER_PATH } from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenData: string;
  private parsedTokenData: any;

  @Output()
  tokenEmitter: EventEmitter<string> = new EventEmitter();

  constructor(private httpService: HttpClient) {}

  getTokenData(): string {
    return this.tokenData;
  }

  setTokenData(data: string): void {
    this.tokenData = data;
  }

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
