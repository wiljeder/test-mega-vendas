"use client";

import { InputPrimitive } from "@/components/ui/input";
import { InputProps } from "./ui/input";
import { useFormContext } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";

type Props = InputProps & {
  name: string;
  label?: string;
  customOnDrop: (files: File[]) => void;
};

export function FileInput({ label, customOnDrop, ...props }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone({
      onDrop: customOnDrop,
      maxFiles: 1,
      accept: {
        "text/csv": [".csv"],
        "text/plain": [".txt"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          ".xlsx",
        ],
      },
    });

  return (
    <div className="flex flex-col gap-y-1">
      {label && (
        <label htmlFor={`input-${props.name}`} className="text-sm">
          {label}
        </label>
      )}
      <div
        className={cn(
          "border rounded-md p-8",
          isDragActive && "border-green-500"
        )}
        {...getRootProps()}
      >
        <InputPrimitive
          {...getInputProps()}
          {...register(props.name)}
          id={`input-${props.name}`}
          {...props}
        />
        <div className="flex flex-col gap-y-2 items-center">
          {isDragActive ? (
            <p>Solte o arquivo aqui</p>
          ) : (
            <p className="text-center">
              Arraste e solte um arquivo ou clique para selecionar
            </p>
          )}
          {acceptedFiles.map((file) => (
            <p key={file.name} className="text-sm">
              {file.name}
            </p>
          ))}
        </div>
      </div>
      {errors[props.name] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[props.name]?.message as string}
        </p>
      )}
    </div>
  );
}
