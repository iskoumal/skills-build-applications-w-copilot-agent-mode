import ResourcePage from './ResourcePage.jsx'

// https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities
export default function Activities() {
  return (
    <ResourcePage
      resource="activities"
      title="Activities"
      description="Browse logged activities from the backend with support for paginated and array responses."
    />
  )
}
