import './App.css'
import { NavLink, Routes, Route } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function Home() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness platform for logging workouts, building teams,
            and competing on leaderboards.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <NavLink className="btn btn-primary btn-lg" to="/activities">
              Activities
            </NavLink>
            <NavLink className="btn btn-outline-secondary btn-lg" to="/leaderboard">
              Leaderboard
            </NavLink>
            <NavLink className="btn btn-outline-secondary btn-lg" to="/teams">
              Teams
            </NavLink>
            <NavLink className="btn btn-outline-secondary btn-lg" to="/users">
              Users
            </NavLink>
            <NavLink className="btn btn-outline-secondary btn-lg" to="/workouts">
              Workouts
            </NavLink>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 mb-3">Ready for launch</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">React 19 + Vite frontend</li>
                <li className="list-group-item px-0">Express + TypeScript backend</li>
                <li className="list-group-item px-0">MongoDB via Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function App() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
        <div>
          <h1 className="h3">OctoFit Tracker</h1>
          <p className="text-muted mb-0">Track activities, teams, users, workouts, and leaderboard data.</p>
        </div>
        <nav className="nav gap-2 mt-3 mt-md-0">
          <NavLink className="btn btn-outline-primary" to="/activities">
            Activities
          </NavLink>
          <NavLink className="btn btn-outline-primary" to="/leaderboard">
            Leaderboard
          </NavLink>
          <NavLink className="btn btn-outline-primary" to="/teams">
            Teams
          </NavLink>
          <NavLink className="btn btn-outline-primary" to="/users">
            Users
          </NavLink>
          <NavLink className="btn btn-outline-primary" to="/workouts">
            Workouts
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  )
}

export default App
