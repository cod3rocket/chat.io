import { writable } from 'svelte/store';

export const usernameWritable = writable('');

export function setUsername(newUsername: string) {
	const hash = Math.floor(Math.random() * 1000) + 4000;

	usernameWritable.set(`${newUsername}#${hash}`);
}
