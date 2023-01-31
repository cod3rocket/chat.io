import { z } from 'zod';

export const MessageModel = z.object({
	username: z.string(),
	message: z.string()
});

export type Message = z.infer<typeof MessageModel>;
