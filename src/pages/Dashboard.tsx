import { motion } from 'framer-motion'
import { Zap, Flame, BookOpen, Trophy, TrendingUp, Target } from 'lucide-react'
import { useAppStore } from '../store/useAppStore'
import { curriculum } from '../data'

function CircularProgress({ value, max, size = 120, label, color }: { value: number; max: number; size?: number; label: string; color: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0
  const r = (size - 12) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (pct / 100) * circ

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} className="progress-ring">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          strokeDasharray={circ}
        />
        <text x="50%" y="50%" textAnchor="middle" dy="0.35em" fill="white" fontSize="20" fontWeight="700" className="font-sans">
          {Math.round(pct)}%
        </text>
      </svg>
      <span className="text-xs text-white/50">{label}</span>
    </div>
  )
}

export default function Dashboard() {
  const { xp, level, streak, completedTopics, quizResults } = useAppStore()
  const totalTopics = curriculum.length
  const avgScore = quizResults.length > 0
    ? Math.round(quizResults.reduce((a, r) => a + (r.score / r.totalQuestions) * 100, 0) / quizResults.length)
    : 0

  const stats = [
    { icon: Zap, label: 'Total XP', value: xp.toLocaleString(), color: '#00f0ff', bg: 'from-cyan-500/10 to-cyan-500/5' },
    { icon: TrendingUp, label: 'Level', value: level, color: '#a855f7', bg: 'from-purple-500/10 to-purple-500/5' },
    { icon: Flame, label: 'Day Streak', value: streak, color: '#f97316', bg: 'from-orange-500/10 to-orange-500/5' },
    { icon: BookOpen, label: 'Topics Done', value: `${completedTopics.length}/${totalTopics}`, color: '#3b82f6', bg: 'from-blue-500/10 to-blue-500/5' },
    { icon: Target, label: 'Avg Score', value: `${avgScore}%`, color: '#22c55e', bg: 'from-green-500/10 to-green-500/5' },
    { icon: Trophy, label: 'Quizzes Taken', value: quizResults.length, color: '#ec4899', bg: 'from-pink-500/10 to-pink-500/5' },
  ]

  const recentResults = quizResults.slice(-5).reverse()

  return (
    <div className="space-y-8">
      <div>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold tracking-tight">
          <span className="cyber-gradient-text">Dashboard</span>
        </motion.h1>
        <p className="text-white/40 text-sm mt-1">Welcome back! Here's your learning overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="stat-card"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.bg} rounded-2xl`} />
            <div className="relative z-10">
              <s.icon size={20} style={{ color: s.color }} className="mb-3 opacity-80" />
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-white/40 mt-1">{s.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Circles */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="glass-panel p-8">
        <h2 className="text-lg font-semibold mb-6 text-white/80">Progress Overview</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <CircularProgress value={completedTopics.length} max={totalTopics} label="Topics Completed" color="#00f0ff" />
          <CircularProgress value={xp} max={level * 100} label="XP to Next Level" color="#a855f7" />
          <CircularProgress value={avgScore} max={100} label="Average Score" color="#22c55e" />
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="glass-panel p-6">
        <h2 className="text-lg font-semibold mb-4 text-white/80">Recent Activity</h2>
        {recentResults.length === 0 ? (
          <p className="text-white/30 text-sm">No quizzes taken yet. Start learning!</p>
        ) : (
          <div className="space-y-3">
            {recentResults.map((r, i) => {
              const topic = curriculum.find(t => t.id === r.topicId)
              const pct = Math.round((r.score / r.totalQuestions) * 100)
              return (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{topic?.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-white/80">{topic?.title}</p>
                      <p className="text-xs text-white/30">{new Date(r.completedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className={`text-sm font-bold ${pct >= 70 ? 'text-green-400' : pct >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {r.score}/{r.totalQuestions} ({pct}%)
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </motion.div>
    </div>
  )
}
