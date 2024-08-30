export const csvGenerateRow = (
  row: any,
  headerKeys: string[],
  delimiter: string,
) => {
  const needsQuoteWrapping = new RegExp(`["${delimiter}\r\n]`);
  return headerKeys
    .map((fieldName) => {
      let value = row[fieldName];
      if (typeof value === "number" || typeof value === "boolean")
        return `${value}`;
      if (!value) return "";
      if (typeof value !== "string") {
        value = String(value);
      }
      /* RFC-4180
      6.  Fields containing line breaks (CRLF), double quotes, and commas should be enclosed in double-quotes.
      7.  If double-quotes are used to enclose fields, then a double-quote inside a field must be escaped by preceding it with
       another double quote. For example: "aaa","b""bb","ccc"
       In order to support something other than commas as delimiters, we will substitute delimiter for comma in rule 6,
       although use of a double quotes or CRLF as delimiter is unsupported. */
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
  headers: string[] | undefined,
  delimiter: string,
) => {
  const headerKeys = headers ?? getAllUniqueKeys(data);
  const csv = data.map((row) => csvGenerateRow(row, headerKeys, delimiter));

  csv.unshift(headerKeys.join(delimiter));

  return csv.join("\r\n");
};
