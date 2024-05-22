import { useState } from 'react'
import getRandomColor from '../utils/getRandomColor'
import getId from '../libs/cuid'
import Partition from './Partition'

export default function PartitionView() {
  const [partitions, setPartitions] = useState<TPartition[]>([
    { id: getId(), color: getRandomColor() }
  ])

  const handleDelete = (id: string) => {
    const deleteRecursive = (parts: TPartition[], targetId: string) => {
      return parts
        .filter((part) => part.id !== targetId)
        .map((part) => {
          if (part.children) {
            part.children = deleteRecursive(part.children, targetId)
          }
          return part
        })
    }

    setPartitions((prev) => deleteRecursive(prev, id))
  }

  const handleSplit = (id: string, direction: 'vertical' | 'horizontal') => {
    const splitRecursive = (parts: TPartition[]) => {
      return parts.map((part) => {
        if (part.id === id) {
          return {
            ...part,
            split: direction,
            children: [
              { id: getId(), color: part.color },
              { id: getId(), color: getRandomColor() }
            ]
          }
        }
        if (part.children) {
          part.children = splitRecursive(part.children)
        }
        return part
      })
    }

    setPartitions((prev) => splitRecursive(prev))
  }

  const renderPartitions = (parts: TPartition[]) => {
    return parts.map((part) => (
      <Partition
        key={part.id}
        id={part.id}
        color={part.color}
        split={part.split}
        children={part.children}
        onDelete={handleDelete}
        onSplit={handleSplit}
      />
    ))
  }

  return (
    <div className='w-screen h-screen rounded flex gap-4'>
      {renderPartitions(partitions)}
    </div>
  )
}
