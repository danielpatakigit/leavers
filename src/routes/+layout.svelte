<script>
	import "../app.pcss";
	import Footer from "../lib/components/Footer.svelte";
	import Header from "../lib/components/Header.svelte";
	import { onNavigate } from "$app/navigation";

	export let data;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Header {data}></Header>
<slot />
<Footer {data}></Footer>
