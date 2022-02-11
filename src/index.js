const csvDownload = (data, name, delimiter) => download(name, jsonToCsv(data, delimiter))

export default csvDownload // Keep this as a default export for backwards compat.

export const jsonDownload = (data, name, delimiter) => download(name, csvToJson(data, delimiter))

/**
 * Provide a way to download the converted data
 * 
 * @param {string} filename The name of the export file.
 * @param {data} {}
 * @returns 
 */
const download = (filename, {data, error}) => {
  if (error && error !== '') {
    throw new Error(error)
  }

  const blob = new Blob([data], {
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

/**
 * Provides support for digesting and exporting JSON to CSV
 * 
 * @param {JSON} data 
 * @param {String} name 
 * @param {Char} delimiter 
 * @returns Object
 */
export const jsonToCsv = (data, delimiter) => {
  try {
    const content = data
    const d = delimiter || `,`

    const header = Array.from(
      new Set(content.reduce((r, e) => [...r, ...Object.keys(e)], []))
    )

    let csv = content.map(row => header.map(fieldName => JSON.stringify(row[fieldName] || '')).join(d))

    csv.unshift(header.join(d))
    csv = csv.join('\r\n')

    return response(csv)
  } catch (error) {
    return response(null, error.message)
  }
}

/**
 * This provides support for digesting and exporting CSV data to JSON.
 *  
 * @param {String} data 
 * @param {String} name 
 * @param {Char} delimiter 
 */
export const csvToJson = (data, delimiter) => {
  try {
    const rows = data.split('\n').filter(_row => _row !== '')
    const d = delimiter || `,`

    let headers = []
    let object = []

    if (rows.length > 0) {
      headers = { ...rows[0].split(d) }
      
      rows.slice(1, rows.length).map(_row => {
        let schema = {}

        _row.split(d).map((_value, _key) => {
          schema[headers[_key]] = _value.replace(/["]+/g, '').trim()
        })
        
        object.push(schema)
      })

      return response(JSON.stringify(object))
    } else {
      throw new Error('No valid rows in csv data')
    }
  } catch (error) {
    return response(null, error.message)
  }
}

/**
 * Return a uniform response object without writing this for each response.
 * 
 * @param {String} data 
 * @param {String} error 
 * @returns 
 */
const response = (data, error = null) => {
  return {
    data: data,
    error: error
  }
}