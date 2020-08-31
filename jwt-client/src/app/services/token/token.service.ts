import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const serverPath = 'http://localhost:8000/decode-token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenData: string;
  private parsedTokenData: any;

  constructor(private httpService: HttpClient) {}

  getTokenData(): string {
    return this.tokenData;
  }

  setTokenData(data: string) {
    this.tokenData = data;
  }

  parsedToken(): string {
    const tokenJson = JSON.stringify({
      token: this.tokenData,
    });

    console.log(tokenJson);

    this.httpService.post<any>(serverPath, tokenJson).subscribe({
      next: (data) => (this.parsedTokenData = data),
      error: (error) => console.log(error),
    });

    console.log(this.parsedTokenData);

    return this.parsedTokenData;
  }
}
