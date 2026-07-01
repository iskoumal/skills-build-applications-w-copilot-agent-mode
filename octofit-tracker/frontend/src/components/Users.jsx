import ResourcePage from './ResourcePage.jsx'

// https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users
export default function Users() {
  return (
    <ResourcePage
      resource="users"
      title="Users"
      description="Browse user profiles and account information from the API."
    />
  )
}
