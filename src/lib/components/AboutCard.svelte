<script lang="ts">
	import { fly } from 'svelte/transition';

	export let image: string;
	export let text: string;
	export let imageLeft: boolean;
	export let xOffsetImage: number;
	export let xOffsetText: number;
    export let animationDuration:number = 3000
</script>

<div
	class="mb-80 md:mb-7 h-[50vh] flex flex-col items-center justify-center {imageLeft
		? ' md:flex-row '
		: ' md:flex-row-reverse'}"
>
	<img
		src={image}
		class="h-[350px] w-auto mr-4 rounded-2xl mb-5 md:mb-0 m-auto"
		alt="Ferienhaus Vagner"
		in:fly={{ duration: animationDuration, x: xOffsetImage }}
	/>
	<p
		class="flex justify-center items-center h-full text-justify mx-10"
		in:fly={{ duration: animationDuration, x: xOffsetText }}
	>
		{text}
	</p>
</div>
