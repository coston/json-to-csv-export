import { csvGenerate } from "./generate";

interface CsvDownloadProps {
  data: any[];
  filename?: string;
  delimiter?: string;
  headers?: string[];
}

const CSV_FILE_TYPE = "text/csv;charset=utf-8;";

const csvDownload = ({
  data,
  filename = "export.csv",
  delimiter = ";",
  headers,
}: CsvDownloadProps): void => {
  const formattedFilename = getFilename(filename);

  if (data.length === 0) {
    triggerCsvDownload(
      headers ? headers.join(delimiter) : "",
      formattedFilename
    );
    return;
  }

  const csvAsString = csvGenerate(data, headers, delimiter);

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
