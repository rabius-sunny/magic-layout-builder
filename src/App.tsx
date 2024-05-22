import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const AlphabetTile = lazy(() => import('./components/AlphabetTile'))
const Home = lazy(() => import('./components/Home'))
const Partitions = lazy(() => import('./components/PartitionView'))

export default function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/partitions'
        element={<Partitions />}
      />
      <Route
        path='/alphabet-tile'
        element={<AlphabetTile />}
      />
    </Routes>
  )
}
