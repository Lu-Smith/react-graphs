import React from 'react';
import PieGraph from './PieGraph';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';
import AreaGraph from './AreaGraph';
import ScatterGraph from './ScatterGraph';

interface MainProps {
  pageNumber: number
}

const MainPage: React.FC<MainProps> = ({pageNumber}) => {

  const data = [
    {name: "Facebook", value: 2.8},
    {name: "TikTok", value: 1},
    {name: "Instagram", value: 1},
    {name: "Reddit", value: 0.43},
    {name: "SnapChat", value: 0.5},
    {name: "Twitter", value: 0.33},
    {name: "LinkedIn", value: 0.7},
    {name: "Twitch", value: 0.03},
    {name: "Pinterest", value: 0.45},
    {name: "Discord", value: 0.15},
    {name: "Telegram", value: 0.5},
  ]

  return (
    <div>
      <h2>Social Network Users</h2>
      <div className='Graph' style={{ width: '90%', height: 400 }}>
        {pageNumber === 1 ? <PieGraph data={data}/> :
        pageNumber === 2 ? <BarGraph data={data}/> :
        pageNumber === 3 ? <LineGraph data={data}/> :
        pageNumber === 4 ? <AreaGraph data={data}/> :
        <ScatterGraph data={data}/>
        }
      </div>

    </div>
  )
}

export default MainPage