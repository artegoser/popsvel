import type { Snippet } from 'svelte';

export interface ModalProps {
	open?: boolean;
	content: Snippet;
	trigger: Snippet;
}

export interface ContentProps {
	class?: string;
	custom?: boolean;
	open: boolean;
	children: Snippet;
}
