import { serve } from 'https://deno.land/std@0.166.0/http/server.ts';
import { Server } from 'https://deno.land/x/socket_io@0.2.0/mod.ts';

const io = new Server();

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected`);

	socket.emit('sending server message');

	socket.on('sending client message', () => {
		console.log('received client message!');
	});

	socket.on('disconnect', () => {
		console.log(`socket ${socket.id} disconnected`);
	});
});

await serve(io.handler(), {
	port: 3000
});
