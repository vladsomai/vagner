<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import testimonialsImport from '$lib/assets/testimonials.json';
	import type { ITestimonial } from '$lib/types/types';
	import TestimonialCard from './TestimonialCard.svelte';
	const testimonials: ITestimonial[] = testimonialsImport;

	const options = {
		type: 'loop',
		rewind: true,
		perPage: 1,
		width: 'auto',
		height: 'auto',
		autoplay: true,
		gap: '1rem'
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

<div class="flex flex-col justify-center items-center" >
	<Splide
		aria-label="Ferienhaus Vagner Bilder"
		{options}
		AutoScroll={true}
		class="flex justify-center items-center max-w-[100vw] md:max-w-[60vw] m-auto px-10"
	>
		{#each testimonials as testimonial}
			<SplideSlide class="flex justify-center items-center">
				<TestimonialCard {testimonial} />
			</SplideSlide>
		{/each}
	</Splide>
</div>
