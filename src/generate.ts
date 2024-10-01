import { HeaderMapping } from ".";


export const csvGenerateRow = (
  row: any,
  headerKeys: string[] | HeaderMapping[],
  delimiter: string,
) => {
  const needsQuoteWrapping = new RegExp(`["${delimiter}\r\n]`);
  return headerKeys
    .map((header) => {
      const fieldName = typeof header === "string" ? header : header.key;
      let value = row[fieldName];
      if (typeof value === "number" || typeof value === "boolean")
        return `${value}`;
      if (!value) return "";
      if (typeof value !== "string") {
        value = String(value);
      }
      if (needsQuoteWrapping.test(value)) {
        return `"${value.replace(/"/g, '""')}"`;
      } else {
        return value;
      }
    })
    .join(delimiter);
};

const getAllUniqueKeys = (data: any[]): string[] => {
  const keys = new Set<string>();
  for (const row of data) {
    for (const key in row) {
      if (row.hasOwnProperty(key)) {
        keys.add(key);
      }
    }
  }
  return Array.from(keys);
};

export const csvGenerate = (
  data: any[],
  headers: string[] | HeaderMapping[] | undefined,
  delimiter: string,
) => {
  const headerKeys = headers ?? getAllUniqueKeys(data);
  const headerRow = headerKeys.map((header) =>
    typeof header === "string" ? header : header.label
  );
  const csv = data.map((row) => csvGenerateRow(row, headerKeys, delimiter));

  csv.unshift(headerRow.join(delimiter));

  return csv.join("\r\n");
};