import { useState } from 'react'
import MainPage from './components/MainPage'
import './App.css'
import FooterComponent from './components/FooterComponent';

function App() {
  const [start, setStart] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const handlePages = () => {
    if (pageNumber < 5) setPageNumber(prev => prev + 1);
    else if (pageNumber === 5) setPageNumber(1);
  }

  return (
    <>
      {start ? <MainPage pageNumber={pageNumber} /> : <h1>Graphs</h1>}
      <div className="card">
          {start ? 
          <div>
            <h2>Graph {pageNumber} 📈</h2>
            <button onClick={handlePages}>
              <span className="material-symbols-outlined">
              double_arrow
              </span>
            </button>
          </div> : 
          <h2>Discover new world of data 📈</h2>}
          {start ? 
            <button onClick={() => setStart(prev => !prev)} className='homeButton'>
              <span className="material-symbols-outlined">
              home
              </span> 
            </button>: 
            <button onClick={() => setStart(prev => !prev)}>
            Start
            </button>
          }
      </div>
      {!start ? <FooterComponent /> : ''}
    </>
  )
}

export default App
