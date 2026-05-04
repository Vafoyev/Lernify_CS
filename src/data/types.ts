export interface Question {
  q: string
  options: string[]
  answer: number
}

export interface Topic {
  id: number
  title: string
  description: string
  icon: string
  color: string
  questions: Question[]
}
