export const CODESPACE_NAME = import.meta.env.VITE_CODESPACE_NAME

export const API_BASE_URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export const API_NOTE = CODESPACE_NAME
  ? ''
  : 'VITE_CODESPACE_NAME is not set. Falling back to http://localhost:8000/api to avoid invalid backend URLs.'

export async function fetchApiResource(resource) {
  const url = `${API_BASE_URL}/${resource}`
  const response = await fetch(url)

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Request failed (${response.status}): ${body || response.statusText}`)
  }

  const payload = await response.json()
  return normalizeApiResponse(payload)
}

function normalizeApiResponse(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  const candidate = payload?.data ?? payload?.items ?? payload?.results
  if (Array.isArray(candidate)) {
    return candidate
  }

  if (candidate !== undefined) {
    return [candidate]
  }

  return [payload]
}
