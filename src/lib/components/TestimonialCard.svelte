<script lang="ts">
	import type { ITestimonial } from '$lib/types/types';
	export let testimonial: ITestimonial;
	import starImg from '$lib/assets/images/banner/start.png';
</script>

<div class="h-[400px] bg-transparent p-5 rounded-lg w-[300px] text-wrap relative mb-10">
	<div class="flex items-center justify-start">
		<img
			class="w-[70px] md:w-[100px] h-auto rounded-full mr-4"
			src={testimonial.Avatar}
			alt={testimonial.Author}
		/>
		<div>
			<p class="text-lg md:text-2xl font-bold">{testimonial.Author}</p>
			<div class="flex items-center mt-2">
				<img class=" w-[20px] h-[20px] mr-2" src={testimonial.CountryFlag} alt="country flag" />
				<p class="text-md md:text-lg">{testimonial.CountryName}</p>
			</div>
		</div>
	</div>
	<img class=" w-auto h-[20px] mt-4" src={starImg} alt="Stars" />
	<p class="mt-5 text-lg md:text-xl">{testimonial.Description}</p>
</div>
