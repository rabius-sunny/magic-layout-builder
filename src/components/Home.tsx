import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-screen h-screen grid grid-rows-2 md:grid-cols-2 md:grid-rows-none'>
      <Link
        to='/partitions'
        className='text-lg text-white font-semibold bg-indigo-500 hover:opacity-80 duration-100 flex items-center justify-center'
      >
        Partition
      </Link>
      <Link
        to='/alphabet-tile'
        className='text-lg text-white font-semibold bg-rose-500 hover:opacity-80 duration-100 flex items-center justify-center'
      >
        Alphabet
      </Link>
    </div>
  )
}
