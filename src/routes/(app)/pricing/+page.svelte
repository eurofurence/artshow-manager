<script lang="ts">
	import Input from '#lib/components/Input.svelte';

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

	<Input autocomplete="off" autofocus placeholder="Scan exhibit..." type="search" />

	<div class="flex items-center gap-3">
		<Input
			autocomplete="off"
			autofocus
			class="w-full"
			placeholder="Scan winning bid..."
			type="search"
		/>

		<Input autocomplete="off" autofocus placeholder="Enter amount..." type="number" />
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
