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
	import { page } from '$app/state';

	let { data, children } = $props();

	const navigation = [
		{
			name: 'Overview',
			icon: faHome,
			href: '/'
		},
		{
			name: 'Exhibits',
			icon: faLandmark,
			href: '/exhibit'
		},
		{
			name: 'Bidding',
			icon: faGavel,
			href: '/bidding'
		},
		{
			name: 'Pricing',
			icon: faTag,
			href: '/pricing'
		}
	];

	let sidebarOpen = $state(false);

	function isActive(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') sidebarOpen = false;
	}}
/>

<div class="min-h-screen lg:grid lg:grid-cols-[18rem_1fr]">
	<!-- sidebar backdrop -->
	<button
		type="button"
		aria-label="Close sidebar"
		onclick={() => (sidebarOpen = false)}
		class={[
			'fixed inset-0 z-40 bg-black/75 transition-opacity lg:hidden',
			sidebarOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
		]}
	></button>

	<!-- sidebar -->
	<aside
		class={[
			'fixed inset-y-0 left-0 z-50 w-72 bg-primary-600 text-white transition-transform',
			'lg:sticky lg:top-0 lg:z-auto lg:h-screen lg:w-auto lg:translate-x-0',
			sidebarOpen ? 'translate-x-0' : '-translate-x-full'
		]}
	>
		<div class="flex h-full flex-col px-4">
			<div class="flex h-16 items-center gap-3">
				<Icon class="h-9 w-9" icon={efEmblem} />

				<span class="flex-1 font-semibold">Art Show Manager</span>

				<button
					aria-label="Close sidebar"
					class="rounded-md p-2 lg:hidden"
					onclick={() => (sidebarOpen = false)}
				>
					<Icon class="h-6 w-6" icon={faXmark} />
				</button>
			</div>

			<nav class="flex-1 py-4">
				<ul class=" space-y-1">
					{#each navigation as item}
						<li>
							<a
								href={item.href}
								onclick={() => (sidebarOpen = false)}
								class={[
									'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-semibold duration-200',
									isActive(item.href) ? 'bg-gray-50 text-primary-600' : 'hover:bg-primary-700'
								]}
							>
								<Icon class="h-6 w-6" icon={item.icon} />
								{item.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div class="flex items-center gap-3 py-3 text-sm font-semibold">
				<img alt="" class="h-9 w-9 rounded-full bg-white" src={data.user.image} />
				{data.user.name}
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
