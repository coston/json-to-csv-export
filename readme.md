# ⌗ json-to-csv-export

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

Or load from a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/json-to-csv-export"></script>
```

## Example Usage

```html
import csvDownload from 'json-to-csv-export'

const ipAddressesData = [
  {
    id: "1",
    name: "Sarajane Wheatman",
    ip: "40.98.252.240"
  },
  {
    id: "2",
    name: "Linell Humpherston",
    ip: "82.225.151.150"
  }
]

const dataToConvert = {
  data: ipAddressesData,
  filename: 'ip_addresses_report',
  delimiter: ',',
  headers: ['IP', "Full Name", "IP Address"]
}

...

<button onClick={() => csvDownload(dataToConvert)}>
Download Data
</button>
```

## Properties

| #  | Property  | Type         | Requirement | Default                   | Description                                                                   |
| -- |-----------|--------------| ----------- |---------------------------|-------------------------------------------------------------------------------|
| 1  | data      | `[]`         | `required`  |                           | array of objects                                                              |
| 2  | filename  | `string`     | `optional`  | "export.csv"              | The filename. The `.csv` extention will be edded if not included in file name |
| 3  | delimiter | `string`     | `optional`  | ";"                       | fields separator                                                              |
| 4  | headers   | `string[]`   | `optional`  | provided data object keys | List of columns that will be used in the final CSV file.                      |

## Migration from version 1.x to 2.x
[migration.md](migration.md)

## Contributing

Please help provide good data faster! Submit any issues and/or make a pull request!
