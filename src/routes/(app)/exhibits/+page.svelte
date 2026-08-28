<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';

	let { data } = $props();

	let groupedExhibits = $derived(
		Object.entries(Object.groupBy(data.exhibits, (exhibit) => exhibit.exhibition_space_id))
	);
</script>

<svelte:head>
	<title>Exhibits - Eurofurence Art Show</title>
</svelte:head>

<div class="space-y-4 border-b border-gray-200 p-6">
	<h1 class="text-xl font-semibold text-gray-900">Exhibits</h1>

	<div class="flex items-center gap-3">
		<input
			autocomplete="off"
			autofocus
			class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition-colors outline-none placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
			placeholder="Search exhibits..."
			type="search"
		/>

		<button
			class="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
			type="button"
		>
			<Icon class="h-4 w-4" icon={faPlus} />
			Add exhibit
		</button>
	</div>
</div>

<table
	class={[
		'w-full divide-y divide-gray-200',
		'[&_th]:px-2 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:tracking-wide [&_th]:text-gray-500 [&_th]:uppercase',
		'[&_thead_tr]:h-10',
		'[&_tbody]:divide-y [&_tbody]:divide-gray-200',
		'[&_tbody_tr]:h-10 [&_tbody_tr]:hover:bg-gray-50',
		'[&_td]:px-2 [&_td]:text-sm [&_td]:whitespace-nowrap'
	]}
>
	<thead>
		<tr class="bg-gray-50">
			<th scope="col">#</th>
			<th scope="col">Name</th>
		</tr>
	</thead>

	<tbody>
		{#each groupedExhibits as [exhibitionSpaceId, exhibits]}
			<tr class="bg-gray-50">
				<th scope="rowgroup" colspan="2">
					Panel {exhibitionSpaceId}
				</th>
			</tr>

			{#each exhibits as exhibit (exhibit.id)}
				<tr>
					<td>{exhibit.id}</td>
					<td>{exhibit.name}</td>
				</tr>
			{/each}
		{/each}
	</tbody>
</table>
