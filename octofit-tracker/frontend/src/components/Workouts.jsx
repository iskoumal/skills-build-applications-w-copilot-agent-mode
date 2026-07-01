import ResourcePage from './ResourcePage.jsx'

// https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts
export default function Workouts() {
  return (
    <ResourcePage
      resource="workouts"
      title="Workouts"
      description="Inspect workout plans and completed sessions via the backend API."
    />
  )
}
