import { useState } from 'react'
import MainPage from './components/MainPage'
import './App.css'

function App() {
  const [start, setStart] = useState(false)

  return (
    <>
      <h1>Graphs</h1>
      <div className="card">
        <button onClick={() => setStart(prev => !prev)}>
        {start ? 'Start' : 'Home Page'}
        </button>
        <div>
        {start ? <MainPage /> : <h2>Discover new world of data 📈</h2>}
        </div>
      
      </div>

    </>
  )
}

export default App
