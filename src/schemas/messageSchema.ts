import { z } from "zod";

export const messagesSchema = z.object({
  content: z
    .string()
    .min(10, "Message should contain atleast 3 charecters")
    .max(500, "Message should not cross the limit of 500 charecters"),
});
