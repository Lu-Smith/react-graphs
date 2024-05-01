import { useState } from 'react'
import MainPage from './components/MainPage'
import './App.css'

function App() {
  const [start, setStart] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePages = () => {
    if (pageNumber < 6) setPageNumber(prev => prev + 1);
    else if (pageNumber === 6) setPageNumber(1);
  }

  return (
    <>
      {start ? <MainPage pageNumber={pageNumber} /> : <h1>Graphs</h1>}
      <div className="card">
        <button onClick={() => setStart(prev => !prev)}>
        {start ? 'Home Page' : 'Start'}
        </button>
        <div>
        {start ? 
        <div>
          <h2>Graph {pageNumber} 📈</h2>
          <button onClick={handlePages}>
                  Next
          </button>
        </div> : 
        <h2>Discover new world of data 📈</h2>}
        </div>
      </div>

    </>
  )
}

export default App
