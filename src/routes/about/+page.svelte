<script lang="ts">
	import AboutCard from '$lib/components/AboutCard.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Picture1 from '$lib/assets/images/banner/castle-wineyard.webp';
	import Picture2 from '$lib/assets/images/banner/living2.jpg';
	import Picture3 from '$lib/assets/images/banner/castle-city.jpg';
	let mounted = false;
	onMount(async () => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Über uns | Ferienhaus Vagner</title>
	<meta name="description" content="Ferienhaus Vagner - Über uns" />
	<meta name="description" content="Ferienhaus Vagner - About" />
</svelte:head>
{#if mounted}
	<div
		class="flex flex-col justify-center items-center mx-[3px] md:mx-[20%] mt-[45%] md:mt-[5%] mb-[10%]"
		in:fly={{ duration: 1000 }}
	>
		<AboutCard
			xOffsetImage={-100}
			xOffsetText={100}
			imageLeft={true}
			image={Picture1}
			animationDuration={2000}
			text={'Mit einem Garten, einer Terrasse und Grillmöglichkeiten bietet die Unterkunft Ferienhaus Vagner Übernachtungsmöglichkeiten in Furth mit kostenlosem WLAN und Bergblick. Diese Ferienwohnung verfügt über kostenlose Privatparkplätze und befindet sich in einer Gegend mit Möglichkeiten zum Wandern und Fahrradfahren.'}
		/>

		<AboutCard
			xOffsetImage={150}
			xOffsetText={-150}
			imageLeft={false}
			image={Picture2}
			animationDuration={3000}
			text={'Diese Ferienwohnung mit Klimaanlage besteht aus 3 Schlafzimmern, einem Wohnzimmer, einer voll ausgestatteten Küche mit einem Kühlschrank und einer Kaffeemaschine sowie 2 Badezimmern mit einem Bidet und einer Dusche. In dieser Ferienwohnung werden Handtücher und Bettwäsche angeboten.'}
		/>

		<AboutCard
			xOffsetImage={-100}
			xOffsetText={100}
			imageLeft={true}
			image={Picture3}
			text={'Die Sehenswürdigkeit Stift Melk liegt 40 km von der Unterkunft Ferienhaus Vagner entfernt, während die Sehenswürdigkeit Burgruine Dürnstein 11 km entfernt ist. Der nächstgelegene Flughafen ist der Flughafen Wien-Schwechat, 98 km von der Unterkunft Ferienhaus Vagner entfernt.'}
		/>
	</div>
{/if}
