<script lang="ts">
	import menuImg from '$lib/assets/images/icons/menu.svg';
	import aboutImg from '$lib/assets/images/icons/about.svg';
	import facilitiesImg from '$lib/assets/images/icons/facilities.svg';
	import LogoIcon from '$lib/assets/images/icons/favicon.svg';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	function closeDrawer() {
		if (browser) {
			document.getElementById('my-drawer-3')?.click();
		}
	}
</script>


<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col relative z-10">
		<div class="w-full navbar flex justify-around items-center py-5">
			<a
				href="/"
				class="flex-none btn btn-lg btn-ghost no-animation flex items-center justify-center"
			>
				<img class="w-auto h-[45px]" src={LogoIcon} alt="logo" />
				<p class={`text-2xl font-bold ${$page.route.id != '/' ? 'text-black' : 'text-white'}`}>
					Ferienhaus <br /> Vagner
				</p>
			</a>
			<div class="flex-none lg:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<img class=" w-auto h-[40px]" src={menuImg} alt="menu" />
				</label>
			</div>
			<div class="hidden lg:block justify-center items-center w-[50%]">
				<ul class="menu menu-horizontal justify-center items-center w-full">
					<li class="mr-2">
						<a
							class={`btn btn-ghost text-xl rounded-full pb-0 pt-1 ${$page.route.id != '/'
								? 'text-black'
								: 'text-white'}`}
							href="/about"
						>
							<img class=" w-auto h-[40px]" src={aboutImg} alt="ber uns, About us" />
							Über uns
						</a>
					</li>
					<li class="mr-2">
						<a
							class={`btn btn-ghost rounded-full text-xl pb-0 pt-1 ${$page.route.id != '/'
								? 'text-black'
								: 'text-white'}`}
							href="/facilities"
						>
							<img class=" w-auto h-[40px]" src={facilitiesImg} alt="Einrichtungen, Facilities" />
							Einrichtungen</a
						>
					</li>
				</ul>
			</div>
		</div>

		<slot />
	</div>
	<div class="drawer-side z-20">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu p-4 w-80 min-h-full bg-base-200 flex justify-around items-center">
			<li>
				<a class="btn btn-ghost text-xl rounded-full" href="/about" on:click={closeDrawer}>
					<img class=" w-auto h-[40px]" src={aboutImg} alt="Über uns, About us" />
					Über uns
				</a>
			</li>
			<li>
				<a class="btn btn-ghost rounded-full text-xl" href="/facilities" on:click={closeDrawer}>
					<img class=" w-auto h-[40px]" src={facilitiesImg} alt="Einrichtungen, Facilities" />
					Einrichtungen</a
				>
			</li>
		</ul>
	</div>
</div>
