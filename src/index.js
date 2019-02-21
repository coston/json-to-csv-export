const csvDownload = (data, name) => {
  const items = data
  const filename = name || `export.csv`

  const header = Array.from(
    new Set(items.reduce((r, e) => [...r, ...Object.keys(e)], []))
  )
  let csv = items.map(row =>
    header.map(fieldName => JSON.stringify(row[fieldName] || '')).join(',')
  )
  csv.unshift(header.join(','))
  csv = csv.join('\r\n')

  const blob = new Blob([csv], {
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
