import { z } from 'zod';

export const messageSchema = z.string().nullable();
export type MessageType = z.infer<typeof messageSchema>;
