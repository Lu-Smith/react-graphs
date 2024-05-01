import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

interface PieGraphProps {
  data: DataItem[];
}

const PieGraph: React.FC<PieGraphProps> = ({data}) => {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF0000', '#800000', '#00FF00', '#008080', '#000080', '#800080'];
   
  return (
    <PieChart width={400} height={400}>
        <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={90}
        label
        >
          {
          data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
        </Pie>
        <Tooltip />
    </PieChart>
  )
}

export default PieGraph