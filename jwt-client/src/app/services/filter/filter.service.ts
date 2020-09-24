import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  filterParsedToken(filterData: string, token: any): any {
    // no filter selected, return whole token
    if (filterData.length === 0 || !this.hasAuthorities(token)) {
      return token;
    }

    const authoritiesObject: any = token.authorities;
    console.log(authoritiesObject);

    // TO-DO create algorithm
    // test
    token.lastName = filterData;
    return token;
  }

  private hasAuthorities(token: object): boolean {
    return token.hasOwnProperty('authorities');
  }
}
