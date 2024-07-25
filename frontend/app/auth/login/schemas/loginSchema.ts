import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Nome de usuário obrigatório").trim(),
  password: z.string().min(1, "Senha obrigatória").trim(),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
