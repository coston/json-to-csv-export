/* eslint-disable */
import React from "react";
import Head from "next/head";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import csvDownload from "../lib/esm";
import mockData from "../docs/mockData";

const App = () => {
  const title = "⬇️ json-to-csv-export";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />f
      </Head>
      <div
        style={{
          fontFamily:
            "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "900px",
          padding: "1em",
        }}
      >
        <h1>{title}</h1>
        <p>
          <a
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
            href="https://www.npmjs.com/package/json-to-csv-export"
          >
            <img
              src="https://badge.fury.io/js/json-to-csv-export.svg"
              alt="npm version"
            />
          </a>
          <a
            style={{ borderBottom: "none", marginRight: "5px" }}
            target="_blank"
            href="https://www.npmjs.com/package/json-to-csv-export"
          >
            <img
              src="https://img.shields.io/npm/dm/json-to-csv-export.svg"
              alt="npm"
            />
          </a>
        </p>
        <LiveProvider
          code={demoCode}
          scope={{
            csvDownload,
            mockData,
          }}
        >
          <div
            style={{
              height: "auto",
              minWidth: "100%",
              marginBottom: "2em",
            }}
          >
            <div>
              <h2>Try Me</h2>
              <p>
                Click the download button to generate and download a csv from
                json.
              </p>
              <LivePreview />
            </div>
          </div>
          <h2>Live Code</h2>
          <div style={{ border: "5px dashed black" }}>
            <LiveEditor
              theme={theme}
              style={{
                background: "black",
                overflow: "scroll",
              }}
            />
            <LiveError />
          </div>
        </LiveProvider>
        <br />
        <h2>Installation</h2>
        <p>
          <code>npm i json-to-csv-export </code>
        </p>
        <h2 id="Usage">Usage</h2>
        <div>
          <ol>
            <li>
              <code>
                import {`{Table, Thead, Tbody, Tr, Th, Td}`} from '
                json-to-csv-export '
              </code>
            </li>
            <li>
              <code>
                import ' json-to-csv-export /dist/SuperResponsiveTableStyle.css'
              </code>
            </li>
            <li>Write your html table with the imported components</li>
          </ol>
        </div>

        <h2>Github</h2>
        <p>
          <a
            href="https://github.com/ua-oira/
json-to-csv-export "
          >
            View project on GitHub
          </a>
        </p>
        <div className="hint" />
      </div>
    </div>
  );
};

export default App;

const theme /*: PrismTheme */ = {
  plain: {
    color: "#ADD8E6",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783",
      },
    },
    {
      types: ["tag", "operator"],
      style: {
        color: "#fff",
      },
    },
  ],
};

const demoCode = `() => {
  const mockData = [{
    "ID": 1,
    "First Name": "Sarajane",
    "Last Name": "Wheatman",
    "Email": "swheatman0@google.nl",
    "Language": "Zulu",
    "IP Address": "40.98.252.240"
  },
  {
    "ID": 2,
    "First Name": "Linell",
    "Last Name": "Humpherston",
    "Email": "lhumpherston1@google.com.br",
    "Language": "Czech",
    "IP Address": "82.225.151.150"
  }]

  return (
    <button onClick={() => csvDownload({ data: mockData })}>
    Download Data
  </button>
  )
}`;
