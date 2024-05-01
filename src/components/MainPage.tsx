import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const MainPage = () => {
  const data = [
    {name: "Facebook", value: 200000000},
    {name: "Instagram", value: 150000000},
    {name: "Twiter", value: 100000000},
    {name: "TikTok", value: 50000000},
  ]

  return (
    <div>
      <h2>Social Network Users</h2>
    </div>
  )
}

export default MainPage