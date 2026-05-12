export interface Quiz {
  questionText: string
  options: string[]
  correctAnswer: string
}

export interface Topic {
  id: number
  title: string
  description: string
  icon: string
  color: string
  quizzes: Quiz[]
}
