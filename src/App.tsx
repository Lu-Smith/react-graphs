import { useState } from 'react'
import MainPage from './components/MainPage'
import './App.css'

function App() {
  const [start, setStart] = useState(false)

  return (
    <>
      {start ? <MainPage /> : <h1>Graphs</h1>}
      <div className="card">
        <button onClick={() => setStart(prev => !prev)}>
        {start ? 'Home Page' : 'Start'}
        </button>
        <div>
        {start ? <h2>Graph 1 📈</h2> : <h2>Discover new world of data 📈</h2>}
        </div>
      
      </div>

    </>
  )
}

export default App
