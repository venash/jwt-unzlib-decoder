import { Injectable } from '@angular/core';
import { Authority } from 'src/app/models/authority.model';
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

    filterData = filterData.toUpperCase();

    const authoritiesObject: Authority[] = token.authorities;
    const updatedAuthorities: Authority[] = [];

    authoritiesObject.forEach((auth) => {
      const updatedAuthoritiesObject = Object.assign({}, auth);
      updatedAuthoritiesObject.permissions = [];

      const permissions = auth.permissions;

      permissions.forEach((permission) => {
        if (permission.includes(filterData)) {
          updatedAuthoritiesObject.permissions.push(permission);
        }
      });

      if (updatedAuthoritiesObject.permissions.length !== 0) {
        updatedAuthorities.push(updatedAuthoritiesObject);
      }
    });
    return updatedAuthorities;
  }
}
