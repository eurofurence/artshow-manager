<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { faBars, faHome, faImages, faXmark } from '@fortawesome/free-solid-svg-icons';

	let { data, children } = $props();

	let sidebarOpen = $state(false);
</script>

<div class="min-h-screen lg:grid lg:grid-cols-[18rem_1fr]">
	{#if sidebarOpen}
		<button
			class="fixed inset-0 z-40 bg-black/40 lg:hidden"
			aria-label="Close sidebar"
			onclick={() => (sidebarOpen = false)}
		></button>
	{/if}

	<aside
		class={[
			'fixed inset-y-0 left-0 z-50 w-72 border-r bg-primary-600 transition-transform',
			'lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:w-auto lg:translate-x-0',
			sidebarOpen ? 'translate-x-0' : '-translate-x-full'
		]}
	>
		<div class="flex h-full flex-col px-6">
			<div class="flex h-16 items-center gap-3 font-semibold">
				<img class="h-9 w-9" src="/favicon.svg" alt="" />

				<span class="flex-1 text-white">Art Show Manager</span>

				<button
					class="rounded-md p-2 lg:hidden"
					aria-label="Close sidebar"
					onclick={() => (sidebarOpen = false)}
				>
					<Icon icon={faXmark} class="h-6 w-6" />
				</button>
			</div>

			<nav class="flex-1 py-4">
				<ul class="space-y-1 -mx-2">
					<li>
						<a
							href="/"
							class={[
								'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold',
								'bg-gray-50 text-primary-600'
							]}
							onclick={() => (sidebarOpen = false)}
						>
							<Icon icon={faHome} class="h-6 w-6" />
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="/exhibits"
							class={[
								'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold',
								'text-primary-200 hover:bg-primary-700 duration-200'
							]}
							onclick={() => (sidebarOpen = false)}
						>
							<Icon icon={faImages} class="h-6 w-6" />
							Exhibits
						</a>
					</li>
				</ul>
			</nav>

			<div class="flex items-center gap-3 py-4 text-sm text-white font-semibold">
				<img class="h-9 w-9 rounded-full bg-white" src={data.user.image} alt="" />
				{data.user.name}
			</div>
		</div>
	</aside>

	<main class="min-w-0">
		<header class="flex h-16 items-center border-b px-4 lg:hidden">
			<button class="rounded-md p-2" aria-label="Open sidebar" onclick={() => (sidebarOpen = true)}>
				<Icon icon={faBars} class="h-5 w-5" />
			</button>
		</header>

		{@render children()}
	</main>
</div>
