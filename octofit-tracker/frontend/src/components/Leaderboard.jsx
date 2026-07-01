import ResourcePage from './ResourcePage.jsx'

// https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard
export default function Leaderboard() {
  return (
    <ResourcePage
      resource="leaderboard"
      title="Leaderboard"
      description="View team and user rankings backed by the leaderboard API endpoint."
    />
  )
}
