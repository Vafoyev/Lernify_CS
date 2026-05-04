import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Curriculum from './pages/Curriculum'
import Quizzes from './pages/Quizzes'
import QuizPlay from './pages/QuizPlay'
import CodeLab from './pages/CodeLab'
import Leaderboard from './pages/Leaderboard'
import Achievements from './pages/Achievements'
import Settings from './pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:topicId" element={<QuizPlay />} />
        <Route path="/code-lab" element={<CodeLab />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
