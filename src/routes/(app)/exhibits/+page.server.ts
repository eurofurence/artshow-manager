import type { PageServerLoad } from './$types';
import { sql } from 'bun';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user;
	if (!user) return;

	const exhibits = await sql<
		{
			id: number;
			exhibition_space_id: number;
			name: string;
		}[]
	>`
		SELECT exhibit.id, exhibition_space_id, name
		FROM exhibit
			JOIN exhibition_space
				ON exhibition_space.id = exhibition_space_id
		ORDER BY exhibition_space_id
	`;

	return {
		exhibits
	};
};
