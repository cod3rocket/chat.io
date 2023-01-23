<script lang="ts">
	import { sendMessage } from '../core/services/chat';

	let username = 'svelte';
	let message: string = '';

	const sendMessageHandler = () => {
		const newMessage = message.trim();
		if (newMessage.length === 0) {
			return;
		}

		sendMessage({
			username,
			message: newMessage
		});

		message = '';
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessageHandler();
		}
	};
</script>

<div class="flex gap-2 w-full p-4 bg-base-300">
	<textarea
		class="textarea textarea-bordered w-full h-12 resize-none"
		placeholder="Text your message..."
		bind:value={message}
		on:keydown={handleKeyDown}
	/>
	<button class="btn btn-primary" on:click={sendMessageHandler}>Send</button>
</div>
