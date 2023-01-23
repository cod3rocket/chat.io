import { writable } from 'svelte/store';

export const usernameWritable = writable('');

export function setUsername(newUsername: string) {
	usernameWritable.set(newUsername);
}
