import { getRequestEvent } from '$app/server';
import { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } from '$app/env/private';
import { betterAuth } from 'better-auth';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { genericOAuth } from 'better-auth/plugins';

export default betterAuth({
	plugins: [
		genericOAuth({
			config: [
				{
					providerId: 'eurofurence',
					discoveryUrl: 'https://identity.eurofurence.org/.well-known/openid-configuration',

					clientId: OAUTH_CLIENT_ID,
					clientSecret: OAUTH_CLIENT_SECRET,
					tokenEndpointAuth: {
						method: 'client_secret_basic'
					},

					mapProfileToUser: (profile) => ({
						name: profile.name,
						email: profile.email,
						image: profile.avatar as string,
						emailVerified: profile.emailVerified
					})
				}
			]
		}),
		sveltekitCookies(getRequestEvent)
	]
});
