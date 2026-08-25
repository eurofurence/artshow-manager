<script lang="ts">
	import Icon from '#lib/components/Icon.svelte';
	import { efEmblem } from '#lib/icons.ts';
	import {
		faBars,
		faGavel,
		faHome,
		faLandmark,
		faTag,
		faXmark
	} from '@fortawesome/free-solid-svg-icons';

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
			'fixed inset-y-0 left-0 z-50 w-72 bg-primary-600 transition-transform',
			'lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:w-auto lg:translate-x-0',
			sidebarOpen ? 'translate-x-0' : '-translate-x-full'
		]}
	>
		<div class="flex h-full flex-col px-6">
			<div class="flex h-16 items-center gap-3 font-semibold">
				<Icon class="h-9 w-9 text-white" icon={efEmblem} />

				<span class="flex-1 text-white">Art Show Manager</span>

				<button
					aria-label="Close sidebar"
					class="rounded-md p-2 text-white lg:hidden"
					onclick={() => (sidebarOpen = false)}
				>
					<Icon class="h-6 w-6" icon={faXmark} />
				</button>
			</div>

			<nav class="flex-1 py-4">
				<ul class="-mx-2 space-y-1">
					<li>
						<a
							class={[
								'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold',
								'bg-gray-50 text-primary-600'
							]}
							href="/"
							onclick={() => (sidebarOpen = false)}
						>
							<Icon class="h-6 w-6" icon={faHome} />
							Overview
						</a>
					</li>
					<li>
						<a
							class={[
								'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold',
								'text-primary-200 duration-200 hover:bg-primary-700'
							]}
							href="/exhibits"
							onclick={() => (sidebarOpen = false)}
						>
							<Icon class="h-6 w-6" icon={faLandmark} />
							Exhibits
						</a>
					</li>
					<li>
						<a
							class={[
								'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold',
								'text-primary-200 duration-200 hover:bg-primary-700'
							]}
							href="/bidding"
							onclick={() => (sidebarOpen = false)}
						>
							<Icon class="h-6 w-6" icon={faGavel} />
							Bidding
						</a>
					</li>
					<li>
						<a
							class={[
								'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold',
								'text-primary-200 duration-200 hover:bg-primary-700'
							]}
							href="/pricing"
							onclick={() => (sidebarOpen = false)}
						>
							<Icon class="h-6 w-6" icon={faTag} />
							Pricing
						</a>
					</li>
				</ul>
			</nav>

			<div class="flex items-center gap-3 py-4 text-sm font-semibold text-white">
				<img alt="" class="h-9 w-9 rounded-full bg-white" src={data.user.image} />
				{data.user.name} (Admin)
			</div>
		</div>
	</aside>

	<main class="min-w-0">
		<header class="flex h-16 items-center px-4 shadow-sm lg:hidden">
			<button aria-label="Open sidebar" class="rounded-md p-2" onclick={() => (sidebarOpen = true)}>
				<Icon class="h-5 w-5" icon={faBars} />
			</button>
		</header>

		{@render children()}
	</main>
</div>
