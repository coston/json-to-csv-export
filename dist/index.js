'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var csvDownload = function csvDownload(data, name) {
  var items = data;
  var filename = name || 'export.csv';

  var header = Array.from(new Set(items.reduce(function (r, e) {
    return [].concat(_toConsumableArray(r), _toConsumableArray(Object.keys(e)));
  }, [])));
  var csv = items.map(function (row) {
    return header.map(function (fieldName) {
      return JSON.stringify(row[fieldName] || '');
    }).join(',');
  });
  csv.unshift(header.join(','));
  csv = csv.join('\r\n');

  var blob = new Blob([csv], {
    type: 'text/plain;charset=utf-8'
  });

  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, filename);
    return;
  }
  var link = document.createElement('a');
  var url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

exports.default = csvDownload;