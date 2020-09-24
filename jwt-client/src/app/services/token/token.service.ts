import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { SERVER_PATH } from '../../utils';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private http: HttpClient) {}

  obtainToken(tokenData: string): Observable<any> {
    const tokenJson = JSON.stringify({
      token: tokenData,
    });

    return this.http.post<any>(SERVER_PATH, tokenJson).pipe(
      map((data) => {
        if ('decodedToken' in data) {
          return JSON.parse(data.decodedToken);
        } else {
          return data;
        }
      })
    );
  }
}
