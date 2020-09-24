import { Injectable } from '@angular/core';
import { Token } from 'src/app/models/token.model';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filterParsedToken(filterData: string, token: Token): any {
    // no filter selected, return whole token
    if (filterData.length === 0 || !token.authorities) {
      return token;
    }

    const authoritiesObject: any = token.authorities;
    console.log(authoritiesObject);

    // TO-DO create algorithm
    // test
    token.lastName = filterData;
    return token;
  }
}
