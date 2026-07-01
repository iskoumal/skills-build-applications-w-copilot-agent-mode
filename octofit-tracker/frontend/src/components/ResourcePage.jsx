import { useEffect, useState } from 'react'
import DataTable from './DataTable.jsx'
import { API_BASE_URL, API_NOTE, fetchApiResource } from '../api.js'

export default function ResourcePage({ resource, title, description }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    setError('')
    setLoading(true)

    fetchApiResource(resource)
      .then((result) => {
        if (active) {
          setItems(result)
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message)
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [resource])

  return (
    <section className="py-4">
      <div className="mb-4">
        <h1>{title}</h1>
        <p className="lead text-muted">{description}</p>
        <p className="small text-muted mb-0">
          Backend endpoint: <code>{`${API_BASE_URL}/${resource}`}</code>
        </p>
      </div>

      {API_NOTE && <div className="alert alert-warning">{API_NOTE}</div>}
      {error && <div className="alert alert-danger">Error: {error}</div>}

      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading…</span>
        </div>
      ) : (
        <DataTable items={items} />
      )}
    </section>
  )
}
