import { getRequestEvent } from '$app/server';
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
					clientId: '83e95046-94ec-48aa-9cda-f30fb604668b'
				}
			]
		}),
		sveltekitCookies(getRequestEvent)
	]
});
