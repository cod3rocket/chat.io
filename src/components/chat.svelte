<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';
	import { socket } from '../core/infra/socket';
	import { MessageModel, type Message } from '../core/model/message';
	import { usernameWritable } from '../core/services/user';

	let chatWrapperRef: HTMLDivElement;

	let username: string = '';
	let messages: Message[] = [];

	onMount(async () => {
		socket.on('message', (message: any) => {
			const parsedMessage = MessageModel.safeParse(message);

			messages = [...messages, message];
		});

		usernameWritable.subscribe((value) => {
			username = value;
		});
	});

	afterUpdate(() => {
		if (
			chatWrapperRef.scrollHeight - chatWrapperRef.scrollTop - chatWrapperRef.clientHeight <
			500
		) {
			chatWrapperRef.scrollTo(0, chatWrapperRef.scrollHeight);
		}
	});
</script>

<div bind:this={chatWrapperRef} class="flex flex-col gap-2 w-full h-full overflow-y-auto p-2 pb-8">
	{#each messages as message}
		<div class="card card-side bg-base shadow-xl bg-base-300">
			<div class="p-8">
				<figure
					class="min-w-[6rem] w-24 rounded-2xl {message.username === username
						? 'bg-accent'
						: 'bg-primary'}"
				>
					<img
						class="rounded-tl-lg rounded-tr-lg"
						src="https://api.dicebear.com/5.x/micah/svg?seed=${message.username}"
						alt="{message.username} avatar"
					/>
				</figure>
			</div>
			<div class="card-body pl-0">
				<h2
					class="card-title gap-0 items-baseline
          {message.username !== username ? 'text-primary' : 'text-secondary'}"
					>
					{message.username.slice(0, -5)}
						<span class="text-sm
						{message.username !== username ? 'text-primary/50' : 'text-secondary/50'}"
						>
							{message.username.slice(-5)}
						</span>
				</h2>
				{#each message.message.split('\n') as paragraph}
					<p class="card-text">{paragraph}</p>
				{/each}
			</div>
		</div>
	{/each}
</div>
