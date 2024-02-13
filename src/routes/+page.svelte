<script lang="ts">
	//@ts-nocheck
	import { onMount } from 'svelte';
	import LogoIcon from '$lib/assets/images/icons/favicon.svg';
	import Gallery from '$lib/components/Gallery.svelte';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import phoneImg from '$lib/assets/images/icons/phone.svg';
	import locationImg from '$lib/assets/images/icons/location.svg';
	import { fly } from 'svelte/transition';
	import viewport from '$lib/useViewportAction';

	let GalleryVisible = false;
	let TestimonialsVisible = false;
	let ContactNumberVisible = false;
	let AddressVisible = false;
	let GoogleMapsVisible = false;

	let pageMount = false;

	onMount(() => {
		pageMount = true;
	});
</script>

<svelte:head>
	<title>Heim | Ferienhaus Vagner</title>
	<meta name="description" content="Ferienhaus Vagner Webseite - Heim" />
	<meta name="description" content="Ferienhaus Vagner Webseite - Home" />
</svelte:head>

<section
	class="h-screen flex flex-col justify-start pt-40 items-center"
	in:fly={{ duration: 1000 }}
>
	{#if pageMount}
		<div class="flex justify-center items-center" in:fly={{ duration: 2000, y: -50 }}>
			<img class=" w-auto h-[50px] md:h-[100px] mr-2" src={LogoIcon} alt="Das Zuhause, Home" />
			<h1 class="text-2xl  md:text-6xl MainTextColor text-center">Ferienhaus Vagner</h1>
		</div>
		<h1 class="text-xl md:text-4xl text-center text-white" in:fly={{ duration: 2000, y: -70 }}>
			Finden Sie Ruhe in der Natur.
		</h1>

		<a
			class="btn btn-md md:btn-lg btn-primary mt-20"
			href="https://www.booking.com/Share-mdMEUp"
			target="_blank"
			rel="noreferrer"
			in:fly={{ duration: 2000, y: 50 }}
		>
			<img
				class=" w-auto h-[30px] md:h-[40px] mr-2"
				src={'https://cf.bstatic.com/static/img/favicon/9ca83ba2a5a3293ff07452cb24949a5843af4592.svg'}
				alt="Booking link"
			/>

			Reservieren Sie Ihren Aufenthalt</a
		>
	{/if}
</section>

<section
	class="h-screen flex flex-col justify-center items-center z-0"
	in:fly={{ duration: 2000, y: -70 }}
	class:fade-out={!GalleryVisible}
	class:fade-in-d1000={GalleryVisible}
	use:viewport
	on:enterViewport={() => {
		GalleryVisible = true;
	}}
	on:exitViewport={() => {
		GalleryVisible = false;
	}}
>
	<Gallery />
</section>

<section
	class="mt-[10vh] mb-[15vh] flex flex-col justify-start items-center relative"
	class:fade-out={!TestimonialsVisible}
	class:fade-in-d1000={TestimonialsVisible}
	use:viewport
	on:enterViewport={() => {
		TestimonialsVisible = true;
	}}
	on:exitViewport={() => {
		TestimonialsVisible = false;
	}}
>
	<h1 class="text-3xl md:text-6xl mb-10 text-center">Was denken andere über uns?</h1>
	<Testimonials />
</section>

<section class="flex flex-col justify-start items-center mb-[30vh]">
	<h1 class="text-3xl md:text-6xl mb-10 text-center">Kontaktiere uns</h1>
	<div class="flex flex-col md:flex-row justify-around items-center w-[50vw] text-xl">
		<div
			class="w-[300px] h-[200px] bg-primary rounded-lg mb-20 flex flex-col justify-center items-center relative right-5"
			class:fade-out={!ContactNumberVisible}
			class:fade-in-right-d1000={ContactNumberVisible}
			use:viewport
			on:enterViewport={() => {
				ContactNumberVisible = true;
			}}
			on:exitViewport={() => {
				ContactNumberVisible = false;
			}}
		>
			<div class="flex justify-center items-center">
				<img src={phoneImg} class="w-[70px] h-[70px] mr-4" alt="Telefonnummer, phone number" />
				<p class="text-2xl text-white">Telefonnummer</p>
			</div>
			<p class="ml-5 text-white">+43 699 140 082 01</p>
			<p class="ml-5 text-white">+43 699 171 711 55</p>
		</div>

		<div
			class="w-[300px] h-[200px] bg-primary rounded-lg mb-20 flex flex-col justify-center items-center relative left-5"
			class:fade-out={!AddressVisible}
			class:fade-in-left-d1000={AddressVisible}
			use:viewport
			on:enterViewport={() => {
				AddressVisible = true;
			}}
			on:exitViewport={() => {
				AddressVisible = false;
			}}
		>
			<div class="flex justify-center items-center">
				<img src={locationImg} class="w-[70px] h-[70px] mr-4" alt="Adresse, Address" />
				<p class="text-2xl text-white">Adresse</p>
			</div>
			<p class="text-wrap ml-10 mt-5 text-white">
				Fichtnerweg 190, 3511 Furth bei Göttweig, Austria
			</p>
		</div>
	</div>
	<div
		class="flex flex-col items-center justify-center relative top-5"
		class:fade-out={!GoogleMapsVisible}
		class:fade-in-top-d1000={GoogleMapsVisible}
		use:viewport
		on:enterViewport={() => {
			GoogleMapsVisible = true;
		}}
		on:exitViewport={() => {
			GoogleMapsVisible = false;
		}}
	>
		<GoogleMaps classList={'h-[50vh] w-[98vw] md:w-[80vw] rounded-lg'} />
	</div>
</section>

<style>
	.fade-out {
		transition: 0.05s ease-in-out all;
		opacity: 0;
	}

	.fade-in-d1000 {
		transition: all 1s ease-in-out 0.2s;
		opacity: 1;
	}

	.fade-in-left-d1000 {
		transition: all 1s ease-in-out 0.2s;
		left: 0px;
		opacity: 1;
	}

	.fade-in-top-d1000 {
		transition: all 1s ease-in-out 0.2s;
		top: 0px;
		opacity: 1;
	}

	.fade-in-right-d1000 {
		transition: all 1s ease-in-out 0.2s;
		right: 0px;
		opacity: 1;
	}

	@media (min-width: 768px) {
		.fade-in-d1000 {
			transition: all 1s ease-in-out 0.2s;
			opacity: 1;
		}
	}
</style>
