import { describe, it } from 'vitest';
import { sendMessage } from './chat';

describe('chat', () => {
	it('should user send a chat message', () => {
		sendMessage({
			username: 'username',
			message: 'some message'
		});
	});
});
