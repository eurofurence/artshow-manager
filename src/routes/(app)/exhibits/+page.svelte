<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Exhibits - Eurofurence Art Show</title>
</svelte:head>

<div class="overflow-x-auto">
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
				<th>Title</th>
				<th>Artist</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each data.exhibits as exhibit (exhibit.id)}
				<tr>
					<td>{exhibit.id}</td>
					<td>{exhibit.title}</td>
					<td>{exhibit.artist}</td>
					<td></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
