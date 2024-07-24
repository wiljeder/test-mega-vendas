import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Preencha o campo"),
  password: z.string().min(1, "Preencha o campo"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
