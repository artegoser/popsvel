import type { Snippet } from 'svelte';

export interface ModalProps {
	class?: string;
	custom?: boolean;
	noCloseBtn?: boolean;
	open?: boolean;
	content: Snippet;
	trigger: Snippet;
}

export interface ContentProps {
	class?: string;
	custom?: boolean;
	noCloseBtn?: boolean;
	open: boolean;
	children: Snippet;
}
