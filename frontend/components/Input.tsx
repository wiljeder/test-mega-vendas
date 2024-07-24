"use client";

import { InputPrimitive } from "@/components/ui/input";
import { InputProps } from "./ui/input";
import { useFormContext } from "react-hook-form";

type Props = InputProps & {
  name: string;
  label?: string;
  error?: string;
};

export function Input({ label, error, ...props }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-y-1">
      {label && (
        <label htmlFor={`input-${props.name}`} className="text-sm">
          {label}
        </label>
      )}
      <InputPrimitive
        {...register(props.name)}
        id={`input-${props.name}`}
        {...props}
      />
      {errors[props.name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[props.name]?.message as string}
        </p>
      )}
    </div>
  );
}
