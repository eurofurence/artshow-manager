<script>
	import { faCheck, faClock } from '@fortawesome/free-solid-svg-icons';
	import Icon from '#lib/components/Icon.svelte';
</script>

<svelte:head>
	<title>Eurofurence Art Show</title>
</svelte:head>

<div class="space-y-4 border-b border-gray-200 p-6">
	<h1 class="text-xl font-semibold text-gray-900">Register as Exhibitor</h1>
</div>

<div class="space-y-6 p-6">
	<button
		class="flex w-full items-center justify-center gap-2 rounded-md bg-primary-600 p-3 font-semibold text-white hover:bg-primary-700"
		type="button"
	>
		<Icon class="h-4 w-4" icon={faCheck} />
		Register as exhibitor
	</button>

	<button
		class="flex w-full items-center justify-center gap-2 rounded-md bg-primary-600 p-3 font-semibold text-white hover:bg-primary-700"
		type="button"
	>
		<Icon class="h-4 w-4" icon={faClock} />
		Waiting for approval
	</button>
</div>
