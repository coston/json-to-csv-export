export const csvGenerateRow = (
  row: any,
  headerKeys: string[],
  delimiter: string
) =>
  headerKeys
    .map((fieldName) =>
      typeof row[fieldName] === "number"
        ? row[fieldName]
        : `"${String(row[fieldName]).replace(/"/g, '""')}"`
    )
    .join(delimiter);

export const csvGenerate = (
  data: any[],
  headers: string[] | undefined,
  delimiter: string
) => {
  const headerKeys = Object.keys(data[0]);
  const columnNames = headers ?? headerKeys;
  const csv = data.map((row) => csvGenerateRow(row, headerKeys, delimiter));

  csv.unshift(columnNames.join(delimiter));

  return csv.join("\r\n");
};
