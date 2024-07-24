"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import { TLoginSchema, loginSchema } from "../schemas/loginSchema";

export function LoginForm() {
  const router = useRouter();
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function submitLogin(formData: TLoginSchema) {
    const result = await signIn("Credentials", {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });

    if (!result?.ok) {
      form.setError("password", { message: "Usuário ou senha inválidos" });
      return;
    }

    router.push("/");
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(submitLogin)}
        className="flex flex-col gap-y-4"
      >
        <Input
          name="username"
          label="Usuário"
          type="text"
          placeholder="Usuário"
        />
        <Input
          name="password"
          label="Senha"
          placeholder="Senha"
          type="password"
        />
        <Button type="submit">Login</Button>
      </form>
    </FormProvider>
  );
}
