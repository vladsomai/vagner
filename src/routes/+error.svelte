<script lang="ts">
	import PageNotFoundImg from '$lib/assets/images/page-not-found.svg';
</script>

<svelte:head>
	<title>Nicht vorhandene Seite | Ferienhaus Vagner</title>
	<meta name="description" content="Ferienhaus Vagner - Error" />
	<meta name="description" content="Ferienhaus Vagner - Nicht vorhandene Seite" />
</svelte:head>
<div class="w-full h-screen flex justify-center items-center">
	<div class="w-full mx-[10%] sm:w-[40%] xl:w-[30%] flex justify-center items-center flex-col">
		<img src={PageNotFoundImg} alt="page not found" />
		<p class="text-2xl sm:text-3xl mt-5 text-center">Leider existiert die von Ihnen gesuchte Seite nicht.</p>
	</div>
</div>
