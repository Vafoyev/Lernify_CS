import { motion } from 'framer-motion'
import { RotateCcw, AlertTriangle } from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '../store/useAppStore'

export default function Settings() {
  const { resetProgress, xp, level, completedTopics, quizResults } = useAppStore()
  const [showConfirm, setShowConfirm] = useState(false)

  const handleReset = () => {
    resetProgress()
    setShowConfirm(false)
  }

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-extrabold">
          <span className="cyber-gradient-text">Settings</span>
        </motion.h1>
        <p className="text-white/40 text-sm mt-1">Manage your learning preferences</p>
      </div>

      {/* Stats Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-6">
        <h2 className="text-sm font-semibold text-white/70 mb-4">Your Statistics</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex justify-between p-3 rounded-xl bg-white/[0.02]">
            <span className="text-white/40">Total XP</span>
            <span className="text-white/80 font-bold">{xp}</span>
          </div>
          <div className="flex justify-between p-3 rounded-xl bg-white/[0.02]">
            <span className="text-white/40">Level</span>
            <span className="text-white/80 font-bold">{level}</span>
          </div>
          <div className="flex justify-between p-3 rounded-xl bg-white/[0.02]">
            <span className="text-white/40">Topics Done</span>
            <span className="text-white/80 font-bold">{completedTopics.length}/30</span>
          </div>
          <div className="flex justify-between p-3 rounded-xl bg-white/[0.02]">
            <span className="text-white/40">Quizzes Taken</span>
            <span className="text-white/80 font-bold">{quizResults.length}</span>
          </div>
        </div>
      </motion.div>

      {/* About */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel p-6">
        <h2 className="text-sm font-semibold text-white/70 mb-3">About</h2>
        <p className="text-xs text-white/30 leading-relaxed">
          Learnify CS is a gamified Computer Science learning platform with 30 topics and 300 questions. Built with React, TypeScript, Tailwind CSS, Framer Motion, and Zustand.
        </p>
      </motion.div>

      {/* Reset */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel p-6 border-red-500/10">
        <h2 className="text-sm font-semibold text-red-400/70 mb-3">Danger Zone</h2>
        {!showConfirm ? (
          <button onClick={() => setShowConfirm(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-red-400/70 bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-all">
            <RotateCcw size={14} /> Reset All Progress
          </button>
        ) : (
          <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/15 space-y-3">
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertTriangle size={16} /> This will erase ALL your progress!
            </div>
            <div className="flex gap-2">
              <button onClick={handleReset} className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-colors">
                Confirm Reset
              </button>
              <button onClick={() => setShowConfirm(false)} className="px-4 py-2 rounded-lg text-sm font-medium bg-white/5 text-white/50 hover:bg-white/10 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
