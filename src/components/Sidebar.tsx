import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Rocket, BookOpen, Brain, Code2, Trophy, Medal, Settings, X, Menu
} from 'lucide-react'

const navItems = [
  { to: '/', icon: Rocket, label: '🚀 Dashboard' },
  { to: '/curriculum', icon: BookOpen, label: '📚 Curriculum' },
  { to: '/quizzes', icon: Brain, label: '🧠 Quizzes' },
  { to: '/code-lab', icon: Code2, label: '💻 Code Lab' },
  { to: '/leaderboard', icon: Trophy, label: '🏆 Leaderboard' },
  { to: '/achievements', icon: Medal, label: '🎖 Achievements' },
  { to: '/settings', icon: Settings, label: '⚙️ Settings' },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Mobile toggle */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 text-white"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[260px] glass-sidebar z-50 flex flex-col py-8 px-4 transition-transform duration-300 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10 px-2"
        >
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="cyber-gradient-text">Learnify</span>
            <span className="text-white/80 ml-1">CS</span>
          </h1>
          <p className="text-[11px] text-white/30 mt-1 tracking-widest uppercase">
            Cyber Learning Platform
          </p>
        </motion.div>

        <nav className="flex-1 flex flex-col gap-1">
          {navItems.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => {
                if (window.innerWidth < 1024) onToggle()
              }}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 w-full"
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </motion.div>
            </NavLink>
          ))}
        </nav>

        <div className="px-2 pt-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyber-glow/20 to-cyber-purple/20 flex items-center justify-center text-sm font-bold text-cyber-glow">
              CS
            </div>
            <div>
              <p className="text-xs font-medium text-white/70">Student</p>
              <p className="text-[10px] text-white/30">v1.0.0</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
