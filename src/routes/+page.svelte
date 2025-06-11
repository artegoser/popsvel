<script>
	import Modal from '$lib/Modal.svelte';
</script>

<div class="main">
	<Modal>
		{#snippet content()}
			<div>Popup</div>
		{/snippet}

		{#snippet trigger()}
			<div>Click</div>
		{/snippet}
	</Modal>
</div>

<style>
	.main {
		margin: 1rem;
		margin-inline: auto;
		width: 100%;
		max-width: 32rem;
	}
</style>
