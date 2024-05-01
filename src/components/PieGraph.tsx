import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';

const PieGraph = () => {
    const data = [
        {name: "Facebook", value: 2800000000},
        {name: "Instagram", value: 1000000000},
        {name: "Twitter", value: 330000000},
        {name: "TikTok", value: 1000000000},
        {name: "LinkedIn", value: 700000000},
        {name: "SnapChat", value: 500000000},
        {name: "Pinterest", value: 450000000},
        {name: "Reddit", value: 430000000},
        {name: "Telegram", value: 500000000},
        {name: "Dicord", value: 150000000},
        {name: "Twitch", value: 30000000},
      ]

  return (
    <PieChart width={400} height={400}>
        <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={90}
        fill="#8884d8"
        label
        />
        <Tooltip />
    </PieChart>
  )
}

export default PieGraph