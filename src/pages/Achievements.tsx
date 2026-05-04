import { motion } from 'framer-motion'
import { useAppStore } from '../store/useAppStore'

const allAchievements = [
  { id: 'first_quiz', title: 'First Steps', desc: 'Complete your first quiz', icon: '🎯', color: '#00f0ff' },
  { id: 'five_topics', title: 'Getting Started', desc: 'Complete 5 topics', icon: '📗', color: '#22c55e' },
  { id: 'ten_topics', title: 'Halfway There', desc: 'Complete 10 topics', icon: '📘', color: '#3b82f6' },
  { id: 'twenty_topics', title: 'Almost Master', desc: 'Complete 20 topics', icon: '📙', color: '#f97316' },
  { id: 'all_topics', title: 'CS Master', desc: 'Complete all 30 topics', icon: '👑', color: '#facc15' },
  { id: 'xp_100', title: 'XP Hunter', desc: 'Earn 100 XP', icon: '⚡', color: '#a855f7' },
  { id: 'xp_500', title: 'XP Warrior', desc: 'Earn 500 XP', icon: '🔥', color: '#ef4444' },
  { id: 'xp_1000', title: 'XP Legend', desc: 'Earn 1000 XP', icon: '💎', color: '#06b6d4' },
  { id: 'xp_2000', title: 'XP God', desc: 'Earn 2000 XP', icon: '🌟', color: '#facc15' },
  { id: 'perfect_score', title: 'Perfectionist', desc: 'Get 10/10 on a quiz', icon: '💯', color: '#22c55e' },
  { id: 'streak_3', title: 'On Fire', desc: '3-day streak', icon: '🔥', color: '#f97316' },
  { id: 'streak_7', title: 'Unstoppable', desc: '7-day streak', icon: '🚀', color: '#ec4899' },
]

export default function Achievements() {
  const { achievements } = useAppStore()

  return (
    <div className="space-y-8">
      <div>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold">
          <span className="cyber-gradient-text">Achievements</span>
        </motion.h1>
        <p className="text-white/40 text-sm mt-1">{achievements.length}/{allAchievements.length} unlocked</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {allAchievements.map((a, i) => {
          const unlocked = achievements.includes(a.id)
          return (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`glass-panel p-6 relative overflow-hidden transition-all duration-500 ${unlocked ? 'ring-1' : 'opacity-40'}`}
              style={unlocked ? { borderColor: `${a.color}30`, boxShadow: `0 0 30px ${a.color}10` } : {}}
            >
              {unlocked && <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full" style={{ background: `${a.color}08` }} />}
              <div className="text-4xl mb-3">{a.icon}</div>
              <h3 className="text-sm font-bold text-white/90">{a.title}</h3>
              <p className="text-xs text-white/30 mt-1">{a.desc}</p>
              {unlocked ? (
                <span className="inline-block mt-3 text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${a.color}20`, color: a.color }}>UNLOCKED</span>
              ) : (
                <span className="inline-block mt-3 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/20">LOCKED</span>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
