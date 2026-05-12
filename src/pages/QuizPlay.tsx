import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, X, Trophy, RotateCcw } from 'lucide-react'
import { curriculum } from '../data'
import { useAppStore } from '../store/useAppStore'

export default function QuizPlay() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const { completeTopic } = useAppStore()

  const topic = curriculum.find(t => t.id === Number(topicId))
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [confirmed, setConfirmed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  useEffect(() => {
    if (topic) setAnswers(new Array(topic.quizzes.length).fill(null))
  }, [topic])

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-white/40">Mavzu topilmadi</p>
        <button onClick={() => navigate('/quizzes')} className="btn-cyber">Testlarga qaytish</button>
      </div>
    )
  }

  const q = topic.quizzes[current]
  const total = topic.quizzes.length
  const optionLetters = ['A', 'B', 'C', 'D']

  const handleSelect = (idx: number) => {
    if (confirmed) return
    setSelected(idx)
  }

  const handleConfirm = () => {
    if (selected === null) return
    setConfirmed(true)
    const newAnswers = [...answers]
    newAnswers[current] = selected
    setAnswers(newAnswers)
    if (q.options[selected] === q.correctAnswer) setScore(s => s + 1)
  }

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
      setConfirmed(false)
    } else {
      setFinished(true)
      const finalScore = score + (selected !== null && q.options[selected] === q.correctAnswer && confirmed ? 0 : 0)
      completeTopic(topic.id, score, total)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setConfirmed(false)
    setScore(0)
    setFinished(false)
    setAnswers(new Array(total).fill(null))
  }

  if (finished) {
    const pct = Math.round((score / total) * 100)
    const xpEarned = score * 10
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
        <div className="glass-panel p-10 text-center max-w-md w-full">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
            <Trophy size={64} className={`mx-auto mb-4 ${pct >= 70 ? 'text-yellow-400' : 'text-white/30'}`} />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">Test yakunlandi!</h2>
          <p className="text-white/40 text-sm mb-6">{topic.title}</p>
          <div className="text-5xl font-extrabold mb-2">
            <span className={pct >= 70 ? 'text-green-400' : pct >= 40 ? 'text-yellow-400' : 'text-red-400'}>{score}</span>
            <span className="text-white/20">/{total}</span>
          </div>
          <p className="text-white/30 text-sm mb-2">{pct}% to'g'ri</p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-cyan-400 text-sm font-medium mb-6">
            +{xpEarned} XP qo'shildi!
          </motion.p>
          <div className="flex gap-3 justify-center">
            <button onClick={handleRestart} className="btn-cyber flex items-center gap-2"><RotateCcw size={14} /> Qayta topshirish</button>
            <button onClick={() => navigate('/quizzes')} className="btn-primary">Testlarga qaytish</button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button onClick={() => navigate('/quizzes')} className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors">
          <ArrowLeft size={16} /> Orqaga
        </button>
        <span className="text-xs text-white/30 font-mono">{current + 1} / {total}</span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${topic.color}, ${topic.color}88)` }}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Topic badge */}
      <div className="flex items-center gap-2">
        <span className="text-lg">{topic.icon}</span>
        <span className="text-sm font-medium text-white/50">{topic.title}</span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          className="glass-panel p-8"
        >
          <h2 className="text-lg font-semibold text-white mb-6 leading-relaxed">{q.questionText}</h2>
          <div className="grid gap-3">
            {q.options.map((opt, idx) => {
              let cls = 'p-4 rounded-xl border text-sm font-medium transition-all duration-300 cursor-pointer text-left w-full flex items-center gap-3 '
              if (!confirmed) {
                cls += selected === idx
                  ? 'bg-white/[0.08] border-cyan-400/40 text-white shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                  : 'bg-white/[0.02] border-white/[0.06] text-white/60 hover:bg-white/[0.05] hover:border-white/[0.12]'
              } else {
                if (q.options[idx] === q.correctAnswer) cls += 'bg-green-500/10 border-green-400/40 text-green-300'
                else if (idx === selected) cls += 'bg-red-500/10 border-red-400/40 text-red-300'
                else cls += 'bg-white/[0.01] border-white/[0.04] text-white/30'
              }
              return (
                <motion.button key={idx} onClick={() => handleSelect(idx)} whileTap={{ scale: 0.98 }} className={cls}>
                  <span className="w-7 h-7 rounded-lg bg-white/[0.05] flex items-center justify-center text-xs font-bold shrink-0">
                    {optionLetters[idx]}
                  </span>
                  <span>{opt}</span>
                  {confirmed && q.options[idx] === q.correctAnswer && <Check size={16} className="ml-auto text-green-400" />}
                  {confirmed && idx === selected && q.options[idx] !== q.correctAnswer && <X size={16} className="ml-auto text-red-400" />}
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="flex justify-between">
        <div className="text-sm text-white/30">Ball: <span className="text-white/70 font-bold">{score}</span></div>
        {!confirmed ? (
          <button onClick={handleConfirm} disabled={selected === null} className="btn-primary disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2">
            <Check size={14} /> Tasdiqlash
          </button>
        ) : (
          <button onClick={handleNext} className="btn-primary flex items-center gap-2">
            {current < total - 1 ? <><ArrowRight size={14} /> Keyingi</> : <><Trophy size={14} /> Yakunlash</>}
          </button>
        )}
      </div>
    </div>
  )
}
