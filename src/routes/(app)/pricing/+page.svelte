<script lang="ts">
	let { data } = $props();

	let groupedExhibits = $derived(
		Object.entries(Object.groupBy(data.exhibits, (exhibit) => exhibit.exhibition_space_id))
	);
</script>

<svelte:head>
	<title>Pricing - Eurofurence Art Show</title>
</svelte:head>

<div class="space-y-4 border-b border-gray-200 p-6">
	<h1 class="text-xl font-semibold text-gray-900">Pricing</h1>

	<div class="flex items-center gap-3">
		<input
			autofocus
			class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
			placeholder="Scan exhibit..."
			type="search"
		/>
	</div>

	<div class="flex items-center gap-3">
		<input
			class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
			placeholder="Scan winning bid..."
			type="search"
		/>
		<input
			class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
			placeholder="Enter amount..."
			type="search"
		/>
	</div>
</div>

<table
	class={[
		'min-w-full divide-y divide-gray-200',
		'[&_th]:px-6 [&_th]:text-left [&_th]:text-xs [&_th]:font-semibold [&_th]:tracking-wide [&_th]:text-gray-500 [&_th]:uppercase [&_thead_tr]:h-10',
		'[&_tbody]:divide-y [&_tbody]:divide-gray-200 [&_tbody_tr]:h-10 [&_tbody_tr]:hover:bg-gray-50 [&_td]:px-6 [&_td]:text-sm [&_td]:whitespace-nowrap [&_td]:text-gray-600'
	]}
>
	<thead class="bg-gray-50">
		<tr>
			<th>#</th>
			<th>Name</th>
			<th></th>
		</tr>
	</thead>

	<tbody>
		{#each groupedExhibits as [exhibitionSpaceId, exhibits]}
			<tr class="bg-gray-50">
				<td colspan="4">{exhibitionSpaceId}</td>
			</tr>

			{#each exhibits as exhibit (exhibit.id)}
				<tr>
					<td>{exhibit.id}</td>
					<td>{exhibit.name}</td>
					<td></td>
				</tr>
			{/each}
		{/each}
	</tbody>
</table>
