import ResourcePage from './ResourcePage.jsx'

// https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams
export default function Teams() {
  return (
    <ResourcePage
      resource="teams"
      title="Teams"
      description="Manage and explore team data from the backend API."
    />
  )
}
