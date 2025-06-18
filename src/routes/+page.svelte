<script>
	import SimpleModal from '$lib/SimpleModal.svelte';
</script>

<div class="main">
	<SimpleModal>
		{#snippet content()}
			<div>Popup</div>
			<div>Popup</div>
		{/snippet}

		{#snippet trigger()}
			<div>Click</div>
		{/snippet}
	</SimpleModal>
</div>

<style>
	.main {
		margin: 1rem;
		margin-inline: auto;
		width: 100%;
		max-width: 32rem;
	}
</style>
