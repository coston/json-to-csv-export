import { csvGenerateRow } from "../src/generate";

describe("csvGenerateRow", () => {

  test("correctly handles empty, number, and boolean values", () => {
    const mockData = {
      id: 0,
      one: true,
      two: false,
      empty: "",
    };
  
    expect(csvGenerateRow(mockData, ["id", "one", "two", "empty"], ",")).toEqual(
      `0,true,false,`
    );
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
      text: 'Bond; James Bond',
    };
    expect(csvGenerateRow(mockData, ["id", "text"], ";")).toEqual(
      `1;"Bond; James Bond"`
    );
  });

  test("correctly handles data containing the delimiter (comma)", () => {
    const mockData = {
      id: 1,
      name: 'Baggins, Frodo',
      location: 'The Shire; Eriador',
    };
    expect(csvGenerateRow(mockData, ["id", "name", "location"], ",")).toEqual(
      `1,"Baggins, Frodo",The Shire; Eriador`
    );
  });
  
});
