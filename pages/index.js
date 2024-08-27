import React from "react";
import dynamic from "next/dynamic";
import path from "path";
import fs from "fs";
import jsonToCsvExport from "../lib/esm";
import mockData from "../docs/mockData";

const PkgDemo = dynamic(() => import("react-pkg-demo"), { ssr: false });

export async function getStaticProps() {
  const readFile = (filePath) => {
    const absolutePath = path.resolve(process.cwd(), filePath);
    return fs.readFileSync(absolutePath, "utf8");
  };

  const content = readFile("./readme.md");

  return {
    props: {
      content,
    },
  };
}

function HomePage({ content }) {
  return (
    <PkgDemo
      color="#ADD8E6"
      packageName="json-to-csv-export"
      icon="⬇️"
      markdown={content}
      scope={{
        jsonToCsvExport,
        mockData,
      }}
    />
  );
}

export default HomePage;
