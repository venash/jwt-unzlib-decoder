import { Token } from './token.model';

interface TokenStorage {
  tokenData: string;
  parsedToken: Token;
}

export const tokenStorage: TokenStorage = {
  tokenData: '',
  parsedToken: undefined,
};
