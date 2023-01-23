import { socket } from '../infra/socket';
import type { Message } from '../model/message';

export const sendMessage = async (message: Message) => {
	socket.emit('message', message);
};
