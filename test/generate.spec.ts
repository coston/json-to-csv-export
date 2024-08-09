import { csvGenerateRow, csvGenerate } from "../src/generate";

describe("csvGenerateRow", () => {
  test("correctly handles empty, number, and boolean values", () => {
    const mockData = {
      id: 0,
      one: true,
      two: false,
      empty: "",
    };

    expect(
      csvGenerateRow(mockData, ["id", "one", "two", "empty"], ",")
    ).toEqual(`0,true,false,`);
  });

  test("correctly handles custom delimiters", () => {
    const mockData = {
      id: 1,
      text: "Lee Perry",
    };

    expect(csvGenerateRow(mockData, ["id", "text"], ";")).toEqual(
      `1;Lee Perry`
    );
  });

  test("correctly handles data with double-quotes", () => {
    const mockData = {
      id: 1,
      text: 'Lee "Scratch" Perry',
    };
    expect(csvGenerateRow(mockData, ["id", "text"], ";")).toEqual(
      `1;"Lee ""Scratch"" Perry"`
    );
  });

  test("correctly handles data with carriage return / newline and whitespace", () => {
    const mockData = {
      id: 1,
      text: `Lee
Perry  `,
    };
    expect(csvGenerateRow(mockData, ["id", "text"], ",")).toEqual(
      `1,"Lee
Perry  "`
    );
  });

  test("correctly handles data containing the delimiter (semicolon)", () => {
    const mockData = {
      id: 1,
      text: "Bond; James Bond",
    };
    expect(csvGenerateRow(mockData, ["id", "text"], ";")).toEqual(
      `1;"Bond; James Bond"`
    );
  });

  test("correctly handles data containing the delimiter (comma)", () => {
    const mockData = {
      id: 1,
      name: "Baggins, Frodo",
      location: "The Shire; Eriador",
    };
    expect(csvGenerateRow(mockData, ["id", "name", "location"], ",")).toEqual(
      `1,"Baggins, Frodo",The Shire; Eriador`
    );
  });
});

describe("csvGenerate", () => {
  test("ensures all key/values are converted even if not in the first object", () => {
    const mockData = [
      { id: 1, name: "Alice" },
      { id: 2, age: 30 },
      { id: 3, name: "Bob", age: 25 },
    ];
    const expectedCsv = `id,name,age\r\n1,Alice,\r\n2,,30\r\n3,Bob,25`;
    expect(csvGenerate(mockData, undefined, ",")).toEqual(expectedCsv);
  });

  test("ensures all key/values are converted with custom headers", () => {
    const mockData = [
      { id: 1, name: "Alice" },
      { id: 2, age: 30 },
      { id: 3, name: "Bob", age: 25 },
    ];
    const expectedCsv = `id,name,age\r\n1,Alice,\r\n2,,30\r\n3,Bob,25`;
    expect(csvGenerate(mockData, ["id", "name", "age"], ",")).toEqual(
      expectedCsv
    );
  });

  test("ensures correct CSV output when object key has no value", () => {
    const mockData = [
      { id: 1, name: "Alice", age: null },
      { id: 2, name: "Bob", age: undefined },
      { id: 3, name: "Charlie", age: "" },
    ];
    const expectedCsv = `id,name,age\r\n1,Alice,\r\n2,Bob,\r\n3,Charlie,`;
    expect(csvGenerate(mockData, ["id", "name", "age"], ",")).toEqual(
      expectedCsv
    );
  });
});
