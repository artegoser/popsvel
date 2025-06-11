<script lang="ts">
	import { fade, scale, slide } from 'svelte/transition';
	import type { ContentProps } from './types.js';
	import X from './icons/X.svelte';
	import { onMount } from 'svelte';

	const button = true;

	let { open = $bindable(), custom, class: c, children }: ContentProps = $props();

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
	class={`cont`}
	role="dialog"
	onclick={clicked}
	onkeyup={keyPressed}
	onmousedown={clicked}
	tabindex="0"
	bind:this={container}
	transition:fade={{ duration: 150 }}
>
	{#if button}
		<button class="btn" aria-label="close">
			<X />
		</button>
	{/if}
	<div
		class={`content${c ? ` ${c}` : ''}`}
		class:basic={!custom}
		transition:scale={{ duration: 150 }}
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

	.content {
		position: relative;
	}

	.basic {
		background-color: white;
		border-radius: 0.25rem;

		max-width: 512px;

		top: 50%;
		left: 0;
		right: 0;
		margin: auto;
		transform: translateY(-50%);

		border-radius: 1rem;
		padding: 1rem;
	}

	.btn {
		z-index: 99999;
		position: absolute;
		background: none;
		border: none;
		color: white;
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
