import curriculumBase from './curriculumData.json'
import topics11_15 from './topics11_15.json'
import topics16_20 from './topics16_20.json'
import topics21_25 from './topics21_25.json'
import topics26_30 from './topics26_30.json'
import type { Topic } from './types'

export type { Topic, Quiz } from './types'

export const curriculum: Topic[] = [
  ...(curriculumBase as Topic[]),
  ...(topics11_15 as Topic[]),
  ...(topics16_20 as Topic[]),
  ...(topics21_25 as Topic[]),
  ...(topics26_30 as Topic[]),
]
