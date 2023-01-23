<script lang="ts">
	import ChatInput from '../components/chat-input.svelte';
	import Chat from '../components/chat.svelte';
</script>

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
