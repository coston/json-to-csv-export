const csvDownload = (data, name, delimiter) => {
  const { filename, csvString } = jsonToCsv(data, name, delimiter)

  const blob = new Blob([csvString], {
    type: 'text/plain;charset=utf-8',
  })

  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename)
    return
  }

  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.href = url
  link.download = filename
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const jsonDownload = (data, name, delimiter) => {
  const { filename, jsonObject } = csvToJson(data, name, delimiter)

  const blob = new Blob([jsonObject], {
    type: 'text/plain;charset=utf-8',
  })

  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename)
    return
  }

  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.href = url
  link.download = filename
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default csvDownload

/**
 * 
 * @param {JSON} __data 
 * @param {String} __name 
 * @param {Char} __delimiter 
 * @returns Object
 */
export const jsonToCsv = (__data, __name, __delimiter) => {
  const data = __data
  const filename = __name || `export.csv`
  const delimiter = __delimiter || `,`

  const header = Array.from(
    new Set(data.reduce((r, e) => [...r, ...Object.keys(e)], []))
  )

  let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName] || '')).join(delimiter))

  csv.unshift(header.join(delimiter))
  csv = csv.join('\r\n')

  return {
    filename: filename,
    csvString: csv,
  }
}

/**
 * This provides support for digesting and exporting CSV data to JSON.
 *  
 * @param {String} __data 
 * @param {String} __name 
 * @param {Char} __delimiter 
 */
export const csvToJson = (__data, __name, __delimiter) => {

  let returnData = {
    filename: null,
    jsonObject: null,
    error: null
  }

  try {
    const rows = __data.split('\n').filter(_row => _row !== '')
    const filename = __name || `export.json`
    const delimiter = __delimiter || `,`

    let headers = []
    let object = []

    returnData.filename = filename

    if (rows.length > 0) {
      let schema = {}

      headers = { ...rows[0].split(delimiter) }
      
      rows.slice(1, rows.length).map(_row => {
        let schema = {}

        _row.split(delimiter).map((_value, _key) => {
          schema[headers[_key]] = _value.replace(/["]+/g, '').trim()
        })
        
        object.push(schema)
      })

      returnData.jsonObject = JSON.stringify(object)
      return returnData 
    } else {
      returnData.error = 'No valid rows in csv data'

      return returnData
    }
  } catch (error) {
    returnData.error = error.message
    return returnData
  }
}