import {
  parseTxtCsvContactFile,
  parseXlsxContactFile,
} from "@/lib/parseContactsFile";
import { z } from "zod";

export const createGroupSchema = z.object({
  name: z.string().min(1, "Nome obrigatório").trim(),
  ownerId: z.number(),
  file: z
    .unknown()
    .refine(Boolean, "Arquivo obrigatório")
    .refine(async (file) => {
      const isValidFileType =
        file instanceof File &&
        (file.name.endsWith(".csv") ||
          file.name.endsWith(".txt") ||
          file.name.endsWith(".xlsx"));

      if (!isValidFileType) {
        return false;
      }

      try {
        if (file.name.endsWith(".xlsx")) {
          parseXlsxContactFile(file);
          return true;
        }
        await parseTxtCsvContactFile(file);
        return true;
      } catch (error) {
        return false;
      }
    }, "Arquivo inválido"),
});

export type TCreateGroupSchema = z.infer<typeof createGroupSchema>;
