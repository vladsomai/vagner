<script lang="ts">
	import FacilityCard from '$lib/components/FacilityCard.svelte';
	import { fly } from 'svelte/transition';
	import AirConditionerImg from '$lib/assets/images/facilities-icons/air-conditioner.jpg';
	import NatureImg from '$lib/assets/images/facilities-icons/nature.webp';
	import GrillImg from '$lib/assets/images/facilities-icons/grill.jpg';
	import Wifi from '$lib/assets/images/facilities-icons/wifi.jpg';
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(async () => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Einrichtungen | Ferienhaus Vagner</title>
	<meta name="description" content="Ferienhaus Vagner - Einrichtungen" />
	<meta name="description" content="Ferienhaus Vagner - Facilities" />
</svelte:head>
{#if mounted}
	<div
		class="flex flex-col justify-center items-center mx-[3px] md:mx-[20%] mt-[45%] md:mt-[5%] mb-[10%]"
		in:fly={{ duration: 1000 }}
	>
		<FacilityCard
			xOffsetImage={100}
			xOffsetText={-100}
			imageLeft={false}
			image={NatureImg}
			animationDuration={2000}
			text={'Nature'}
		/>
		<FacilityCard
			xOffsetImage={-100}
			xOffsetText={100}
			imageLeft={true}
			image={GrillImg}
			animationDuration={2000}
			text={'Grill'}
		/>
		<FacilityCard
			xOffsetImage={100}
			xOffsetText={-100}
			imageLeft={false}
			image={Wifi}
			animationDuration={2000}
			text={'Free Wi-Fi'}
		/>
		<FacilityCard
			xOffsetImage={-100}
			xOffsetText={100}
			imageLeft={true}
			image={AirConditionerImg}
			animationDuration={2000}
			text={'Klimaanlage'}
		/>
	</div>
{/if}
