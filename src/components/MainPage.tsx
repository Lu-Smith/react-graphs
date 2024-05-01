import React from 'react';
import PieGraph from './PieGraph';
import BarGraph from './BarGraph';
import LineGraph from './LineGraph';
import AreaGraph from './AreaGraph';
import ScatterGraph from './ScatterGraph';

const MainPage = () => {

  const data = [
    {name: "Facebook", value: 2.8},
    {name: "Instagram", value: 1},
    {name: "SnapChat", value: 0.5},
    {name: "Twitter", value: 0.33},
    {name: "Twitch", value: 0.03},
    {name: "TikTok", value: 1},
    {name: "LinkedIn", value: 0.7},
 
    {name: "Pinterest", value: 0.45},
    {name: "Reddit", value: 0.43},
    {name: "Telegram", value: 0.5},
    {name: "Discord", value: 0.15},
    
  ]

  return (
    <div>
      <h2>Social Network Users</h2>
        <PieGraph data={data} />
        <BarGraph data={data} />
        <LineGraph data={data} />
        <AreaGraph data={data} />
        <ScatterGraph data={data} />
    </div>
  )
}

export default MainPage