import {
    inflate,
} from "https://deno.land/x/compress@v0.3.3/mod.ts";

export interface Token {
    token: string;
}

export function decodeTokenPayload(token: string): string {
    const payloadSubstring = token.split('.')[1];
    const base64 = payloadSubstring.replace(/-/g, '+').replace(/_/g, '/');
    const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    const uzlibed = inflate(bytes)
    const decoded = new TextDecoder().decode(uzlibed);
    return decoded;
}
