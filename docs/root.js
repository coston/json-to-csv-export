// example Root component
import React from 'react'
import { StyleProvider } from 'mdx-go'
import csvDownload, { jsonDownload } from '../src/index'
import Table from 'instant-table'
import { csvData, jsonData } from './mockData.js'

const components = {
  csvDownload,
  jsonDownload,
  jsonData,
  csvData,
  Table
}

const theme = {
  LiveCode: {
    borderRadius: '4px',
  },
  LiveEditor: {
    color: 'plum',
    backgroundColor: 'black',
    overflow: 'scroll'
  }
}


export const Root = props =>(
  <StyleProvider components={components} theme={theme}>
    <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '32px',
      paddingRight: '32px',
      paddingTop: '32px',
      paddingBottom: '32px',
      maxWidth: '1000px'
    }}>
      {props.children}
    </div>
  
  </StyleProvider>
)