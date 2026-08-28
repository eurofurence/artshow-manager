<script lang="ts">
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import Icon from '#lib/components/Icon.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Payment - Eurofurence Art Show</title>
</svelte:head>

<div class="space-y-4 border-b border-gray-200 p-6">
	<h1 class="text-xl font-semibold text-gray-900">Payment</h1>

	<input
		autocomplete="off"
		autofocus
		class="w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition-colors outline-none placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
		placeholder="Scan badge..."
		type="search"
	/>
</div>

<div class="space-y-6 p-6">
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
			<tr>
				<th scope="col">#</th>
				<th scope="col">Name</th>
				<th class="text-right!" scope="col">Price</th>
			</tr>
		</thead>

		<tbody>
			{#each data.exhibits as exhibit (exhibit.id)}
				<tr>
					<td>{exhibit.id}</td>
					<td>{exhibit.name}</td>
					<td class="text-right! tabular-nums">€{exhibit.price}.00</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<div class="flex justify-between border-t border-gray-200 pt-4">
		<span class="font-semibold">Total</span>
		<span class="text-xl font-semibold tabular-nums">€0.00</span>
	</div>

	<button
		class="flex w-full items-center justify-center gap-2 rounded-md bg-primary-600 p-3 font-semibold text-white transition-colors hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:cursor-not-allowed disabled:opacity-50"
		type="button"
	>
		<Icon class="h-4 w-4" icon={faCheck} />
		Mark €0.00 paid
	</button>
</div>
