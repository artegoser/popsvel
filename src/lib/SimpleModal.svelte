<script lang="ts">
	import Popup from './Popup.svelte';
	import type { SimpleModalProps } from './types.js';

	let {
		open = $bindable(false),
		content,
		class: c,
		custom,
		noCloseBtn,
		trigger
	}: SimpleModalProps = $props();
</script>

<Popup bind:open class={c} {custom} {noCloseBtn}>
	{@render content()}
</Popup>

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
