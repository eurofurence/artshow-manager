<script>
	import { faCheck } from '@fortawesome/free-solid-svg-icons';
	import Icon from '#lib/components/Icon.svelte';
	import Button from '#lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Eurofurence Art Show</title>
</svelte:head>

<div class="space-y-4 border-b border-gray-200 p-6">
	<h1 class="text-xl font-semibold text-gray-900">Register as Exhibitor</h1>
</div>

<div class="space-y-6 p-6">
	<Button class="w-full justify-center" type="button">
		<Icon class="h-4 w-4" icon={faCheck} />
		Register as exhibitor
	</Button>
</div>
