import * as xlsx from "xlsx";

export async function parseTxtCsvContactFile(file: File) {
  const stringContent = (await file.text()).replaceAll("\r", "");
  const rows = stringContent.split("\n");

  const contacts = rows.map((row) => {
    const [name, phone] = row.split(",");

    return { name, phone: String(phone) };
  });

  return contacts;
}

export function parseXlsxContactFile(file: File) {
  return new Promise<{ name: string; phone: string }[]>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target === null) {
        return;
      }

      try {
        const data = new Uint8Array(event.target.result as ArrayBuffer);
        const workbook = xlsx.read(data, { type: "array" });

        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });

        const contacts = rows.map((row: any) => {
          const name = row[0];
          const phone = String(row[1]);

          return { name, phone };
        });

        resolve(contacts);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsArrayBuffer(file);
  });
}
