<script lang="ts">
	import { fade, scale, slide } from 'svelte/transition';
	import type { PopupProps } from './types.js';
	import X from './icons/X.svelte';
	import { onMount } from 'svelte';

	let { open = $bindable(), custom, class: c, noCloseBtn, children }: PopupProps = $props();

	let container: HTMLDivElement;

	const keyPressed = ({ code }: KeyboardEvent) => {
		if (code === 'Escape') {
			open = false;
		}
	};

	const clicked = (e: MouseEvent) => {
		if (!(e.target as HTMLElement).closest('.content')) {
			open = false;
		}
	};

	onMount(() => {
		container.focus();
	});
</script>

<div
	class="cont"
	role="dialog"
	onclick={clicked}
	onkeyup={keyPressed}
	onmousedown={clicked}
	class:basic={!custom}
	tabindex="0"
	bind:this={container}
	transition:fade={{ duration: 150 }}
>
	{#if !noCloseBtn}
		<button class="btn" aria-label="close">
			<X />
		</button>
	{/if}

	<div
		class={`content${c ? ` ${c}` : ''}`}
		class:basic={!custom}
		transition:scale={{ duration: 150, start: 0.9 }}
	>
		{@render children()}
	</div>
</div>

<style>
	.cont {
		position: fixed;
		z-index: 9999;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.cont.basic {
		box-sizing: border-box;
		display: flex;
		align-items: safe center;
		justify-content: safe center;
		padding: 1rem;
	}

	.content {
		position: relative;
	}

	.content.basic {
		box-sizing: border-box;

		background-color: white;
		border-radius: 0.25rem;

		width: 100%;
		max-width: 512px;

		border-radius: 1rem;
		padding: 2rem;
	}

	.btn {
		z-index: 99999;
		position: fixed;
		background: none;
		border: none;
		color: rgb(255, 255, 255);
		filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 1));
		top: 0;
		right: 0;
		cursor: pointer;
		transition-duration: 200ms;
	}

	.btn:hover,
	.btn:focus {
		opacity: 70%;
	}
</style>
