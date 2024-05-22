import { useState } from 'react'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function AlphabetTile() {
  const [outputString, setOutputString] = useState('')

  const handleTileClick = (letter: string) => {
    let newString = outputString + letter
    newString = replaceConsecutiveLetters(newString)
    setOutputString(newString)
  }

  const replaceConsecutiveLetters = (str: string) => {
    const regex = /(.)\1{2,}/g
    return str.replace(regex, '_')
  }

  return (
    <div className='p-4'>
      <div className='m-4 flex items-center gap-3'>
        <div className='text-3xl'>Output string : </div>
        <div
          id='outputString'
          className='text-rose-600 font-semibold text-3xl'
        >
          {outputString}
        </div>
      </div>

      <div className='grid grid-cols-4 md:grid-cols-8 gap-4'>
        {alphabet.map((letter) => (
          <div
            key={letter}
            className='text-3xl font-bold text-indigo-600 w-full h-20 md:h-40 rounded shadow-lg shadow-indigo-500/40 cursor-pointer hover:bg-indigo-200 duration-100 flex items-center justify-center'
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
    </div>
  )
}
