<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '$lib/styles/output.css';
	import scrollTopImg from '$lib/assets/images/icons/arrow-top.svg';
	import { browser } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	let scrollTopBtn: HTMLButtonElement | null = null;
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
    // import MainImg from '$lib/assets/images/banner/main2.jpg'

	let scrollY = 0;
	let scrollTopBtnIsHidden = true;
	$: {
		if (scrollY == 0) {
			scrollTopBtn?.classList.add('hidden');
			scrollTopBtnIsHidden = true;
		} else {
			if (scrollTopBtnIsHidden) {
				scrollTopBtn?.classList.remove('hidden');
				scrollTopBtnIsHidden = false;
			}
		}
	}
	function handleScrollTop() {
		if (browser) {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		}
	}
	let innerWidth = 0;
</script>

<svelte:head>
	<title>Ferienhaus Vagner</title>
</svelte:head>
<svelte:window bind:scrollY bind:innerWidth />

{#if innerWidth < 768}
	<div
		class="absolute top-0 h-screen w-screen p- m-0 p-0 z-10 bg-no-repeat bg-cover bg-center opacity-30"
		style="background-image: url('/navbar-background.svg');"
		in:fly={{ duration: 1000 }}
	></div>
{:else}
	<img
		class="w-screen h-auto opacity-20 top-0 absolute z-10 lg:block"
		src="/navbar-background.svg"
		alt="menu"
        in:fly={{ duration: 1000 }}
	/>
{/if}
{#if $page.route.id == '/'}
	<div
		class="absolute top-0 h-screen w-full m-0 p-0 -z-10 bg-no-repeat bg-cover bg-center"
		style="background-image: url('/main.webp');"
		in:fly={{ duration: 1000 }}
	></div>
{/if}

<div
	class="fixed h-screen -z-20 w-screen opacity-80 bg-no-repeat bg-cover bg-center blur-xl "
	style="background-image: url('/background.svg');"
></div>

<Navbar>
	<div class="max-w-[100vw] z-10">
		<slot />
		<button
			bind:this={scrollTopBtn}
			on:click={handleScrollTop}
			class="btn rounded-full z-20 bg-secondary w-[70px] h-[70px] fixed bottom-10 right-10 flex justify-center items-center"
		>
			<img class="w-auto h-[40px] animate-bounce-slow" src={scrollTopImg} alt="scroll top" />
		</button>
	</div>
</Navbar>
<Footer />
