import React from 'react'

function renderCell(value) {
  if (value === null || value === undefined) {
    return '-'
  }
  if (typeof value === 'object') {
    return JSON.stringify(value, null, 0)
  }
  return String(value)
}

export default function DataTable({ items }) {
  if (!items || items.length === 0) {
    return <div className="alert alert-info">No records found.</div>
  }

  const headers = Object.keys(items[0])

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered align-middle">
        <thead className="table-light">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header) => (
                <td key={`${rowIndex}-${header}`}>{renderCell(item[header])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
