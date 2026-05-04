import { motion } from 'framer-motion'
import { Crown, Medal, TrendingUp } from 'lucide-react'

const mockUsers = [
  { name: 'Alex Chen', xp: 2850, level: 29, avatar: '🧑‍💻', topics: 28 },
  { name: 'Sarah Kim', xp: 2640, level: 27, avatar: '👩‍💻', topics: 26 },
  { name: 'David Park', xp: 2200, level: 23, avatar: '👨‍💻', topics: 22 },
  { name: 'Emma Wilson', xp: 1980, level: 20, avatar: '👩‍🎓', topics: 19 },
  { name: 'James Lee', xp: 1750, level: 18, avatar: '🧑‍🎓', topics: 17 },
  { name: 'Maria Garcia', xp: 1500, level: 16, avatar: '👩‍🔬', topics: 15 },
  { name: 'Tom Brown', xp: 1200, level: 13, avatar: '👨‍🔬', topics: 12 },
  { name: 'Lisa Wang', xp: 950, level: 10, avatar: '👩‍💼', topics: 9 },
  { name: 'You', xp: 0, level: 1, avatar: '🎯', topics: 0, isYou: true },
  { name: 'Ryan Scott', xp: 400, level: 5, avatar: '🧑‍💼', topics: 4 },
]

export default function Leaderboard() {
  const rankColors = ['#facc15', '#c0c0c0', '#cd7f32']

  return (
    <div className="space-y-8">
      <div>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold">
          <span className="cyber-gradient-text">Leaderboard</span>
        </motion.h1>
        <p className="text-white/40 text-sm mt-1">Compete with other learners</p>
      </div>

      {/* Top 3 */}
      <div className="grid grid-cols-3 gap-4">
        {mockUsers.slice(0, 3).map((u, i) => (
          <motion.div
            key={u.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`glass-panel p-6 text-center ${i === 0 ? 'ring-1 ring-yellow-400/20' : ''}`}
          >
            <div className="text-4xl mb-3">{u.avatar}</div>
            {i === 0 ? <Crown size={20} className="mx-auto mb-2 text-yellow-400" /> : <Medal size={18} className="mx-auto mb-2" style={{ color: rankColors[i] }} />}
            <p className="text-sm font-semibold text-white/90">{u.name}</p>
            <p className="text-xs text-white/30 mt-1">{u.xp.toLocaleString()} XP</p>
            <p className="text-xs mt-1" style={{ color: rankColors[i] }}>#{i + 1}</p>
          </motion.div>
        ))}
      </div>

      {/* Full List */}
      <div className="glass-panel overflow-hidden">
        <div className="grid grid-cols-[50px_1fr_80px_80px_60px] gap-2 px-5 py-3 border-b border-white/[0.06] text-xs text-white/30 font-medium">
          <span>Rank</span><span>Student</span><span>XP</span><span>Topics</span><span>Lvl</span>
        </div>
        {mockUsers.map((u, i) => (
          <motion.div
            key={u.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className={`grid grid-cols-[50px_1fr_80px_80px_60px] gap-2 px-5 py-3 items-center border-b border-white/[0.03] text-sm ${(u as any).isYou ? 'bg-cyan-400/5 border-cyan-400/10' : ''}`}
          >
            <span className="font-bold text-white/40" style={i < 3 ? { color: rankColors[i] } : {}}>#{i + 1}</span>
            <div className="flex items-center gap-2">
              <span>{u.avatar}</span>
              <span className={`font-medium ${(u as any).isYou ? 'text-cyan-400' : 'text-white/70'}`}>{u.name}</span>
            </div>
            <span className="text-white/50 font-mono text-xs">{u.xp.toLocaleString()}</span>
            <span className="text-white/40 text-xs">{u.topics}/30</span>
            <span className="text-white/40 text-xs">{u.level}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
