type TDirection = 'vertical' | 'horizontal'
type TPartition = {
  id: string
  color: string
  split?: TDirection
  children?: TPartition[]
}
