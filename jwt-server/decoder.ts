import { inflate } from 'https://deno.land/x/compress@v0.3.3/mod.ts';

export interface Token {
  token: string;
}

export function decodeTokenPayload(token: string): string {
  const payloadSubstring = getPayloadSubstring(token);
  const base64 = payloadSubstring.replace(/-/g, '+').replace(/_/g, '/');
  const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  const uzlibed = inflate(bytes);
  const decoded = new TextDecoder().decode(uzlibed);
  return decoded;
}

function getPayloadSubstring(token: string): string {
  if (token.split('.').length - 1 === 2) {
    return token.split('.')[1];
  }
  return token;
}
