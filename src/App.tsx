import { useState } from 'react'
import MainPage from './components/MainPage'
import './App.css'

function App() {
  const [start, setStart] = useState(false)

  return (
    <>
      <h1>Graphs</h1>
      <div className="card">
        <button onClick={() => setStart(true)}>
          Start
        </button>
        {start ? <MainPage /> : 'Welcome'}
      </div>

    </>
  )
}

export default App
