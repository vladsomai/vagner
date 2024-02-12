<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader/src/index';
	import googleMapsImg from '$lib/assets/images/icons/google-maps.svg';

	export let classList = '';

	const key = 'AIzaSyB5mDP4GOnzATO3QU4fl9ca0xG0GKsYE9k';
	const uluru = { lat: 48.37259720485345, lng: 15.61785825950858 };
	let googleMapsContainer: HTMLDivElement;
	onMount(async () => {
		const loader = new Loader({
			apiKey: key,
			version: 'weekly'
		});

		const { Map } = (await loader.importLibrary('maps')) as google.maps.MapsLibrary;

		const map = new Map(googleMapsContainer, {
			center: uluru,
			zoom: 15
		});

		// The marker, positioned at Uluru
		const marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
	});
</script>

<div class={classList} bind:this={googleMapsContainer} />
<a
	href="https://maps.app.goo.gl/fsPyW1MRqnHDqPEZ6"
	target="_blank"
	rel="noreferrer"
	class="btn bg-white text-black text-xl mt-4"
>
	<img class=" w-auto h-[20px]" src={googleMapsImg} alt="Ferienhaus Vagner Google Maps" />
	In Google Maps öffnen</a
>
