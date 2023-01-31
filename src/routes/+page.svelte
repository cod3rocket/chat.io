<script lang="ts">
	import { onMount } from 'svelte';
	import ChatInput from '../components/chat-input.svelte';
	import Chat from '../components/chat.svelte';
	import SetUsername from '../components/set-username.svelte';
	import { usernameWritable } from '../core/services/user';

	let username: string = '';

	onMount(async () =>
		usernameWritable.subscribe((value) => {
			username = value;
		})
	);
</script>

{#if username.length === 0}
	<SetUsername />
{/if}
<div class="chat-wrapper w-full h-screen bg-base-100">
	<Chat />
	<ChatInput />
</div>

<style>
	.chat-wrapper {
		display: grid;
		grid-template-rows: 1fr auto;
	}
</style>
