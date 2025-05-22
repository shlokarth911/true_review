import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "Username at least 2 charecters")
  .max(20, " Username can be atmost 20 charecters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters");

export const singnUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid Email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 charecters" }),
});
