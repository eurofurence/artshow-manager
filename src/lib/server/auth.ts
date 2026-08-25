import { getRequestEvent } from '$app/server';
import { betterAuth } from 'better-auth';
import { sveltekitCookies } from 'better-auth/svelte-kit';

export default betterAuth({
	plugins: [sveltekitCookies(getRequestEvent)]
});
