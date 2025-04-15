import z from "zod";

export const authSchema = {
  signIn: z.object({
    email: z.string().email(),
    password: z.string().min(5).max(15),
  }),
  signUp: z.object({
    full_name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(5).max(15),
  }),
};
