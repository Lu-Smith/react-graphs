import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

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
      <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
    </div>
  )
}

export default MainPage