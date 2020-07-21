import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from 'https://deno.land/x/dejs@0.8.0/mod.ts';
import { decodeTokenPayload, Token } from "./decoder.ts";

const app = new Application();

const router = new Router();

/*
Serve index.html
 */
router.get('/', async (ctx) => {
    const body = await renderFileToString(Deno.cwd() + '/index.ejs', {});
    ctx.response.body = body;
});

router.post('/decode-token', async (ctx) => {
    try {
        const body = await ctx.request.body({ type: 'json'});
        const tokenJson: Token = await body.value;
        const decoded = decodeTokenPayload(tokenJson.token);
        ctx.response.body = JSON.stringify({ decodedToken: decoded });
    } catch (error) {
        ctx.response.body = JSON.stringify({ error: 'Invalid Token' });
    }
})

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
    await send(ctx, ctx.request.url.pathname);
})

app.listen({ port: 8000 });
