# ⬇️ json-to-csv-export

A function to easily generate csv downloads of your json data. ✨

[![npm package version](https://badge.fury.io/js/json-to-csv-export.svg)](https://www.npmjs.com/package/json-to-csv-export)
&nbsp;
[![npm downloads](https://img.shields.io/npm/dm/json-to-csv-export.svg)](https://www.npmjs.com/package/json-to-csv-export)
&nbsp;
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

## Live Demo

[https://json-to-csv-export.coston.io](https://json-to-csv-export.coston.io)

## Features

- Create a csv download from json data
- Lightweight
- Easy to use
- Optional filename
- Optional header names

## Install

Install with npm:

```sh
npm i json-to-csv-export
```

or load from a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/json-to-csv-export"></script>
```

## Example Usage

```jsx
// import jsonToCsvExport from "json-to-csv-export";

() => {
  const mockData = [
    {
      ID: 1,
      "First Name": "Sarajane",
      "Last Name": "Wheatman",
      Email: "swheatman0@google.nl",
      Language: "Zulu",
      "IP Address": "40.98.252.240",
    },
    {
      ID: 2,
      "First Name": "Linell",
      "Last Name": "Humpherston",
      Email: "lhumpherston1@google.com.br",
      Language: "Czech",
      "IP Address": "82.225.151.150",
    },
  ];

  return (
    <button onClick={() => jsonToCsvExport({ data: mockData })}>
      Download Data
    </button>
  );
};
```

## Example with Header mapping

```jsx
// import jsonToCsvExport from "json-to-csv-export";
() => {
  const mockData = [
    {
      id: 1,
      firstName: "Sarajane",
      lastName: "Wheatman",
      email: "swheatman0@google.nl",
      language: "Zulu",
      ip: "40.98.252.240",
    },
    {
      id: 2,
      firstName: "Linell",
      lastName: "Humpherston",
      email: "lhumpherston1@google.com.br",
      language: "Czech",
      ip: "82.225.151.150",
    },
  ];

  const headers = [
    { key: "id", label: "Identifier" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email Address" },
    { key: "language", label: "Language" },
    { key: "ip", label: "IP Address" },
  ];

  return (
    <button onClick={() => jsonToCsvExport({ data: mockData, headers })}>
      Download Data
    </button>
  );
  };
```




## Properties

```typescript
interface HeaderMapping {
  label: string;
  key: string;
}
```


| # | Property  | Type                             | Requirement | Default                   | Description                                                                              |
| - | --------- | -------------------------------- | ----------- | ------------------------- | ---------------------------------------------------------------------------------------- |
| 1 | data      | []                               | required    |                           | array of objects                                                                         |
| 2 | filename  | string                           | optional    | "export.csv"              | The filename. The .csv extention will be added if not included in file name              |
| 3 | delimiter | string                           | optional    | ","                       | fields separator                                                                         |
| 4 | headers   | string[] OR<br />HeaderMapping[] | optional    | provided data object keys | List of columns that will be used in the final CSV file. Recommended for large datasets! |

## Migration from version 1.x to 2.x

[migration.md](migration.md)

## Contributing

Please help provide good data faster! Submit any issues and/or make a pull request!
