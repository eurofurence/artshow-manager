import auth from '#lib/server/auth.ts';
import { building } from '$app/env';
import { svelteKitHandler } from 'better-auth/svelte-kit';

export async function handle({ event, resolve }) {
	const session = await auth.api.getSession({
		headers: event.request.headers
	});

	event.locals.user = {
		name: 'Valaphee',
		image:
			'https://s3.eurofurence.org/identity-avatars/SbKrbp8mDXQvNmBSWVzGh4T9W54InDIPFPAiCWzI.webp'
	}; // TODO

	if (session) {
		event.locals.user = session.user;
		event.locals.session = session.session;
	}

	return svelteKitHandler({
		event,
		resolve,
		auth,
		building
	});
}
