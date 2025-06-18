import type { Snippet } from 'svelte';

export interface SimpleModalProps {
	class?: string;
	custom?: boolean;
	noCloseBtn?: boolean;
	open?: boolean;
	content: Snippet;
	trigger: Snippet;
}

export interface PopupProps {
	class?: string;
	custom?: boolean;
	noCloseBtn?: boolean;
	open: boolean;
	children: Snippet;
}
