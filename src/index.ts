import { csvGenerate } from "./generate";

interface CsvDownloadProps {
  data: any[];
  filename?: string;
  delimiter?: string;
  headers?: string[];
  columnsToIgnore?: string[];
}

interface ObjectType {
  [key: string]: any;
}

const CSV_FILE_TYPE = "text/csv;charset=utf-8;";

const csvDownload = ({
  data,
  filename = "export.csv",
  delimiter = ";",
  headers,
  columnsToIgnore,
}: CsvDownloadProps): void => {
  const formattedFilename = getFilename(filename);

  if (data.length === 0) {
    triggerCsvDownload(
      headers ? headers.join(delimiter) : "",
      formattedFilename
    );
    return;
  }

  function removeColumns<T extends ObjectType>(
    objects: T[],
    keysToRemove: (keyof T)[]
  ) {
    return objects.map((obj) => {
      const newObj = {} as T;
      Object.entries(obj).forEach(([key, value]) => {
        if (!keysToRemove.includes(key as keyof T)) {
          newObj[key as keyof T] = value;
        }
      });
      return newObj;
    });
  }

  const filteredData = columnsToIgnore
    ? removeColumns(data, columnsToIgnore)
    : data;
  const csvAsString = csvGenerate(filteredData, headers, delimiter);

  triggerCsvDownload(csvAsString, formattedFilename);
};

const triggerCsvDownload = (csvAsString: string, fileName: string) => {
  // BOM support for special characters in Excel
  const byteOrderMark = "\ufeff";

  const blob = new Blob([byteOrderMark, csvAsString], {
    type: CSV_FILE_TYPE,
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const getFilename = (providedFilename: string): string => {
  return /csv$/i.test(providedFilename)
    ? providedFilename
    : `${providedFilename}.csv`;
};

export default csvDownload;
