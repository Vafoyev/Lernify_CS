import { Routes, Route, Navigate } from 'react-router-dom'
import { useAppStore } from './store/useAppStore'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Curriculum from './pages/Curriculum'
import Quizzes from './pages/Quizzes'
import QuizPlay from './pages/QuizPlay'
import CodeLab from './pages/CodeLab'
import Leaderboard from './pages/Leaderboard'
import Achievements from './pages/Achievements'
import Settings from './pages/Settings'
import Profile from './pages/Profile'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAppStore()
  if (!isLoggedIn) return <Navigate to="/login" replace />
  return <>{children}</>
}

export default function App() {
  const { isLoggedIn } = useAppStore()

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
      <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:topicId" element={<QuizPlay />} />
        <Route path="/code-lab" element={<CodeLab />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
