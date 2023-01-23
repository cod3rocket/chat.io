<script lang="ts">
	import { setUsername } from '../core/services/user';

	let username = '';

	function onSubmit() {
		setUsername(username);
	}
</script>

<div class="modal modal-open">
	<form on:submit|preventDefault={onSubmit} class="modal-box">
		<h3 class="font-bold text-lg">Choose your username</h3>
		<input
			type="text"
			class="input input-bordered w-full my-4"
			placeholder="Username"
			bind:value={username}
		/>
		<div class="modal-action">
			<button type="submit" class="btn btn-primary" on:click={onSubmit}>Select</button>
		</div>
	</form>
</div>
