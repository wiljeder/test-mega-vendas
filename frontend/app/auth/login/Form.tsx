"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, TLoginSchema } from "./loginSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  async function submitLogin(formData: TLoginSchema) {
    const result = await signIn("Credentials", {
      username: formData.username,
      password: formData.password,
      redirect: false,
    });

    if (result?.error) {
      setError("password", { message: "Usuário ou senha inválidos" });
      return;
    }

    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit(submitLogin)}
      className="flex flex-col gap-y-4"
    >
      <input
        type="text"
        {...register("username")}
        className="px-2 py-1 rounded-md"
      />
      {errors.username && (
        <p className="text-red-500 text-xs">{errors.username?.message}</p>
      )}
      <input
        type="password"
        {...register("password")}
        className="px-2 py-1 rounded-md"
      />
      {errors.password && (
        <p className="text-red-500 text-xs">{errors.password?.message}</p>
      )}
      <button type="submit" className="bg-indigo-700 text-white rounded-md p-1">
        Login
      </button>
    </form>
  );
}
