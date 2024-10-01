import csvDownload, { HeaderMapping } from "../src/index";
import mockData from "./__mocks__/mockData";

// current version of JSDom doesn't support Blob.text(), so this is a FileReader-based workaround.
const getBlobAsText = async (
  blob: Blob,
  encoding = "text/csv;charset=utf-8;"
): Promise<string> => {
  const fileReader = new FileReader();
  return new Promise((resolve) => {
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
    fileReader.readAsText(blob, encoding);
  });
};

describe("csvDownload", () => {
  const _URL = global.URL;
  let capturedBlob: Blob | null;
  let link;

  beforeAll(() => {
    global.URL.createObjectURL = (blob: Blob) => {
      capturedBlob = blob;
      return "test/url";
    };
  });

  beforeEach(() => {
    document.onclick = (e) => {
      link = e.target as HTMLAnchorElement;
    };
    capturedBlob = null;
  });

  afterEach(() => {
    global.URL = _URL;
  });

  test("mock data is loaded", () => {
    expect(mockData).toHaveLength(25);
  });

  test("init min config", async () => {
    csvDownload({ data: [] });
  });

  test("with data, using comma delimiter as default", async () => {
    csvDownload({ data: mockData });
    expect(link.href).toContain("test/url");
    expect(link.download).toEqual("export.csv");
    expect(capturedBlob).not.toBe(null);
    const generatedCsvString = await getBlobAsText(capturedBlob as Blob);
    expect(
      generatedCsvString.startsWith(
        `id,First Name,Last Name,Email,Gender,IP Address`
      )
    ).toBeTruthy();
    expect(
      generatedCsvString.includes(
        `1,Blanch,Elby,belby0@bing.com,Female,112.81.107.207`
      )
    ).toBeTruthy();
  });

  test("with all properties provided", async () => {
    csvDownload({
      data: mockData,
      headers: [
        "id",
        "First Name",
        "Last Name",
        "Email",
        "Gender",
        "IP Address",
      ],
      filename: "custom-name",
      delimiter: ";",
    });
    expect(link.download).toEqual("custom-name.csv");
    expect(capturedBlob).not.toBe(null);
    const generatedCsvString = await getBlobAsText(capturedBlob as Blob);
    expect(
      generatedCsvString.startsWith(
        `id;First Name;Last Name;Email;Gender;IP Address`
      )
    ).toBeTruthy();
    expect(
      generatedCsvString.includes(
        `1;Blanch;Elby;belby0@bing.com;Female;112.81.107.207`
      )
    ).toBeTruthy();
  });

  test("headers order is respected", async () => {
    const customHeaders = ["First Name", "Email", "Last Name", "id"];
    csvDownload({
      data: mockData,
      headers: customHeaders,
      filename: "ordered-headers",
      delimiter: ",",
    });
    expect(link.download).toEqual("ordered-headers.csv");
    expect(capturedBlob).not.toBe(null);
    const generatedCsvString = await getBlobAsText(capturedBlob as Blob);
    expect(
      generatedCsvString.startsWith(`First Name,Email,Last Name,id`)
    ).toBeTruthy();
    expect(
      generatedCsvString.includes(`Blanch,belby0@bing.com,Elby,1`)
    ).toBeTruthy();
  });

  test("downloads CSV with HeaderMapping",async  () => {
    const headers: HeaderMapping[] = [
      { key: "First Name", label: "First Name Label" },
      { key: "Last Name", label: "Last Name Label" },
      { key: "Email", label: "Email Address Label" },
      { key: "Gender", label: "Gender Label" },
      { key: "IP Address", label: "IP Address Label" },
    ];

    const expectedCsv = `First Name,Last Name,Email Address,Gender,IP Address\r\nPaulie,Steffens,psteffenso@washingtonpost.com,Female,115.83.208.158`;


    csvDownload({
      data: mockData,
      headers,
      filename: "test-customHeaders.csv",
    });
    expect(link.download).toEqual("test-customHeaders.csv");
    expect(capturedBlob).not.toBe(null);
    const generatedCsvString = await getBlobAsText(capturedBlob as Blob);
    console.log(generatedCsvString);
    expect(
      generatedCsvString.startsWith(`First Name Label,Last Name Label,Email Address Label,Gender Label,IP Address Label`)
    ).toBeTruthy();
    expect(
      generatedCsvString.includes(`Blanch,Elby,belby0@bing.com,Female,112.81.107.207`)
    ).toBeTruthy();

  });
});
