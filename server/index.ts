import { serve } from 'https://deno.land/std@0.166.0/http/server.ts';
import { Server } from 'https://deno.land/x/socket_io@0.2.0/mod.ts';
import { z } from 'https://deno.land/x/zod@v3.20.2/mod.ts';

const MessageSchema = z.object({
	username: z.string(),
	message: z.string()
});

const io = new Server({
	cors: {
		origin: Deno.env.get('WEBAPP_URL') ?? 'http://localhost:5173',
		methods: ['GET', 'POST']
	}
});

io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected`);

	socket.on('message', (message) => {
		try {
			// Validate message
			const parsedMessage = MessageSchema.parse(message);

			console.log(`socket ${socket.id} sent message: ${parsedMessage}`);

			socket.emit('message', parsedMessage);
		} catch (error) {
			console.error(error);
		}
	});

	socket.on('disconnect', () => {
		console.log(`socket ${socket.id} disconnected`);
	});
});

await serve(io.handler(), {
	port: Deno.env.get('PORT') ? Number(Deno.env.get('PORT')) : 3000
});
