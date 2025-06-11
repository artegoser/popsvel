<script lang="ts">
	import Content from './Content.svelte';
	import type { ModalProps } from './types.js';

	let { open = $bindable(false), content, trigger }: ModalProps = $props();
</script>

{#if open}
	<Content bind:open>
		{@render content()}
	</Content>
{/if}

<section
	class="trigger"
	onkeyup={({ code }) => {
		if (code === 'Enter') {
			open = true;
		}
	}}
	onclick={() => (open = true)}
	role="button"
	tabindex="0"
>
	{@render trigger()}
</section>

<style>
	.trigger {
		cursor: pointer;
	}
</style>
