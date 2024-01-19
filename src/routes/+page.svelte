<script lang="ts">
	import WorkInProgressImg from '$lib/assets/images/work-in-progress.svg';
	import homeImg from '$lib/assets/images/icons/home.svg';
</script>

<div class="h-screen flex flex-col justify-center items-center mb-20">
    <div class="flex justify-center items-center mt-20">
        <img class=" w-auto h-[50px] md:h-[100px] mr-2" src={homeImg} alt="Das Zuhause, Home" />
        <h1 class="text-2xl md:text-6xl MainTextColor text-center">
            Ferienhaus Vagner
        </h1>
    </div>
	<img class="w-auto h-[400px] mb-10 mt-24" src={WorkInProgressImg} alt="in Arbeit" />
	<h1 class="text-4xl text-center">Wir arbeiten derzeit an der Website, Sie werden uns bald finden.</h1>
</div>
