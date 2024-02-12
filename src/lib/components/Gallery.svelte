<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	let pictures: string[] = [];

	const picturesImport = import.meta.glob('$lib/assets/images/carousel/*.jpg', {
		query: {
			enhanced: true
		}
	});
	let tempPic: string[] = [];
	for (const pic in picturesImport) {
		tempPic = [pic, ...tempPic];
	}
	pictures = [...tempPic];

	const options = {
		rewind: true,
		perPage: 1,
		width: 'auto',
		height: 'auto',
		autoplay: true,
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

<Splide
	aria-label="Ferienhaus Vagner Bilder"
	{options}
	class="flex justify-center items-center max-w-[90vw]"
>
	{#each pictures as pic}
		<SplideSlide>
			<img class="rounded-lg h-[80vh] w-auto m-auto" src={pic} alt="ferienhaus vagner bild" />
		</SplideSlide>
	{/each}
</Splide>
