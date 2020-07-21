import { unzlib } from "https://deno.land/x/denoflate/mod.ts";

export interface Token {
    token: string;
}

export function decodeTokenPayload(token: string): string {
    const payloadSubstring = token.split('.')[1];
    const base64 = payloadSubstring.replace(/-/g, '+').replace(/_/g, '/');
    const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    const uzlibed = unzlib(bytes)
    const decoded = new TextDecoder().decode(uzlibed);
    return decoded;
}
