"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import {
  TCreateGroupSchema,
  createGroupSchema,
} from "../schemas/createGroupSchema";
import { FileInput } from "@/components/FileInput";
import {
  parseTxtCsvContactFile,
  parseXlsxContactFile,
} from "@/lib/parseContactsFile";
import { createGroupWithContacts } from "../actions/createGroupWithContacts";

type Props = {
  ownerId: number;
};

export function CreateGroupForm({ ownerId }: Props) {
  const form = useForm<TCreateGroupSchema>({
    resolver: zodResolver(createGroupSchema),
    defaultValues: {
      ownerId,
      file: null,
    },
  });

  async function onSubmit({ name, ownerId, file: f }: TCreateGroupSchema) {
    try {
      const file = f as File;

      const contacts = [];

      if (file.name.endsWith(".xlsx")) {
        contacts.push(...(await parseXlsxContactFile(file)));
      }

      if (file.name.endsWith(".txt") || file.name.endsWith(".csv")) {
        contacts.push(...(await parseTxtCsvContactFile(file)));
      }

      await createGroupWithContacts({
        name,
        ownerId,
        contacts,
      });
    } catch (error: any) {
      form.setError("file", {
        message: error?.message || "Erro ao processar o arquivo",
      });
      console.error(error);
    }
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 md:min-w-[480px]"
      >
        <Input name="name" label="Nome" type="text" placeholder="Nome" />
        <Input name="ownerId" value={ownerId} type="hidden" />
        <FileInput
          label="Contatos (csv, txt, xlsx)"
          name="file"
          customOnDrop={(files: File[]) => {
            form.setValue("file", files[0]);
          }}
        />
        <Button type="submit">Criar Grupo</Button>
      </form>
    </FormProvider>
  );
}
