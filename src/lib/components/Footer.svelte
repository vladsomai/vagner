<script lang="ts">
	import LogoIcon from '$lib/assets/images/icons/favicon.svg';
	import footerBgImg from '$lib/assets/images/footer-background.svg';
</script>

<footer class="footer relative z-0 footer-center text-primary-content">
    <img class="w-screen h-auto bottom-0 hidden absolute lg:block" src={footerBgImg} alt="menu" />
    <aside class="relative">
        <img class="w-auto h-[100px]" src={LogoIcon} alt="logo" />
        
		<p class="font-bold">
            Ferienhaus Vagner <br />
			Finden Sie Ruhe in der Natur.
		</p>
		<p class="text-[10px]">Copyright © {new Date().getFullYear()} SvgDev | All rights reserved.</p>
	</aside>
	<nav></nav>
</footer>
