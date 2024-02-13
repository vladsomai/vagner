<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { onMount } from 'svelte';

	let mounted = false;

    let images: string[] = [];
	onMount(async () => {
		const imagePaths = Object.keys(import.meta.glob('/static/carousel/*.jpg', { eager: true }));
		for (const imgPath of imagePaths) {
			const indexOfSecondSlash = imgPath.indexOf('/', 2);
			const temp = imgPath.slice(indexOfSecondSlash, imgPath.length);
			images = [temp, ...images];
		}
		mounted = true;
	});

	const options = {
		rewind: true,
		perPage: 1,
		width: 'auto',
		height: 'auto',
		autoplay: true
	};

	let innerWidth = 0;

	$: {
		if (innerWidth < 1000) {
			options.perPage = 1;
		} else if (innerWidth < 1480) {
			options.perPage = 2;
		} else {
			options.perPage = 3;
		}
	}
</script>

<svelte:window bind:innerWidth />

{#if mounted}
	<Splide
		aria-label="Ferienhaus Vagner Bilder"
		{options}
		class="flex justify-center items-center max-w-[90vw]"
	>
		{#each images as pic}
			<SplideSlide>
				<img class="rounded-lg h-[80vh] w-auto m-auto" src={pic} alt="Ferienhaus Vagner" />
			</SplideSlide>
		{/each}
	</Splide>
{/if}
