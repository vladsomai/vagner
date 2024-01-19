<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '$lib/styles/output.css';
	import scrollTopImg from '$lib/assets/images/icons/arrow-top.svg';
	import { browser } from '$app/environment';
	import Footer from '$lib/components/Footer.svelte';
	let scrollTopBtn: HTMLButtonElement | null = null;

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
</script>

<svelte:head>
	<title>Ferienhaus Vagner</title>
</svelte:head>
<svelte:window bind:scrollY />

<div
	class="fixed h-screen w-screen opacity-50 blur-lg"
	style="background-image: url('/background.jpg'); background-repeat: no-repeat;
background-size: cover;
background-position: center center;"
></div>

<Navbar>
	<div class="max-w-[100vw]">
		<slot />
		<button
			bind:this={scrollTopBtn}
			on:click={handleScrollTop}
			class="btn rounded-full bg-secondary w-[70px] h-[70px] fixed bottom-10 right-10 flex justify-center items-center"
		>
			<img class="w-auto h-[40px] animate-bounce-slow" src={scrollTopImg} alt="scroll top" />
		</button>
	</div>
</Navbar>
<Footer />
