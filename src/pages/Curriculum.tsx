import { motion } from 'framer-motion'
import { CheckCircle, Lock, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { curriculum } from '../data'
import { useAppStore } from '../store/useAppStore'

export default function Curriculum() {
  const navigate = useNavigate()
  const { completedTopics } = useAppStore()

  return (
    <div className="space-y-8">
      <div>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold">
          <span className="cyber-gradient-text">O'quv rejasi</span>
        </motion.h1>
        <p className="text-white/40 text-sm mt-1">30 ta mavzuni o'zlashtiring</p>
      </div>

      <div className="grid gap-3">
        {curriculum.map((topic, i) => {
          const done = completedTopics.includes(topic.id)
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              onClick={() => navigate(`/quiz/${topic.id}`)}
              className="glass-panel-hover p-5 cursor-pointer flex items-center gap-4 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: `${topic.color}15`, border: `1px solid ${topic.color}25` }}
              >
                {topic.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-white/20">#{String(topic.id).padStart(2, '0')}</span>
                  <h3 className="text-sm font-semibold text-white/90 truncate">{topic.title}</h3>
                </div>
                <p className="text-xs text-white/30 mt-0.5 truncate">{topic.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {done ? (
                  <CheckCircle size={18} className="text-green-400" />
                ) : (
                  <Lock size={14} className="text-white/15" />
                )}
                <ChevronRight size={16} className="text-white/20 group-hover:text-white/50 transition-colors" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
