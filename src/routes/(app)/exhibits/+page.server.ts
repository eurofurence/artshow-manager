import type { PageServerLoad } from './$types';
import { sql } from 'bun';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user;
	if (!user) return;

	const exhibits = await sql<
		{
			id: number;
			title: string;
			artist: string;
		}[]
	>`
		SELECT exhibit.id, title, artist
		FROM exhibit
					 JOIN exhibition_space
								ON exhibition_space.id = exhibit.exhibition_space_id
		WHERE exhibition_space.exhibitor_id = ${user.id}
	`;

	return {
		exhibits
	};
};
