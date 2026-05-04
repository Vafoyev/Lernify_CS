import { topics1 } from './topics1'
import { topics2 } from './topics2'
import { topics3 } from './topics3'
import type { Topic } from './types'

export type { Topic, Question } from './types'

export const curriculum: Topic[] = [...topics1, ...topics2, ...topics3]
