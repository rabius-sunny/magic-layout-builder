type TProps = {
  id: string
  color: string
  split?: TDirection
  children?: TPartition[]
  onDelete: (id: string) => void
  onSplit: (id: string, direction: TDirection) => void
}

export default function Partition({
  id,
  color,
  split,
  children,
  onDelete,
  onSplit
}: TProps) {
  const renderChildren = (children: TPartition[]) => {
    return children.map((child) => (
      <Partition
        key={child.id}
        id={child.id}
        color={child.color}
        split={child.split}
        children={child.children}
        onDelete={onDelete}
        onSplit={onSplit}
      />
    ))
  }

  return (
    <div
      className={`flex-grow ${
        split === 'vertical' ? 'flex-col' : 'flex-row'
      } relative`}
      style={{ backgroundColor: color }}
    >
      <div className='absolute top-1/2 right-1/2 flex gap-1'>
        <button
          onClick={() => onDelete(id)}
          className='shadow-black shadow  px-2 rounded-full'
        >
          -
        </button>
        <button
          onClick={() => onSplit(id, 'vertical')}
          className='shadow-black shadow  px-1.5 rounded-full'
        >
          V
        </button>
        <button
          onClick={() => onSplit(id, 'horizontal')}
          className='shadow-black shadow  px-1.5 rounded-full'
        >
          H
        </button>
      </div>
      {children && (
        <div
          className={`flex ${
            split === 'vertical' ? 'flex-col' : 'flex-row'
          } size-full`}
        >
          {renderChildren(children)}
        </div>
      )}
    </div>
  )
}
