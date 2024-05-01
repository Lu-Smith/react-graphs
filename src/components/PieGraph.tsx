import React from 'react'
import { PieChart, Pie, Tooltip } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

interface PieGraphProps {
  data: DataItem[];
}

const PieGraph: React.FC<PieGraphProps> = ({data}) => {
   
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