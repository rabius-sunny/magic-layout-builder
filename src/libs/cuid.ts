import { init } from '@paralleldrive/cuid2'

const getId = init({
  random: Math.random,
  length: 6
})

export default getId
