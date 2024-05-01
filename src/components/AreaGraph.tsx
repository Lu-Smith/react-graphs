import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

interface DataItem {
    name: string;
    value: number;
  }
  
  interface AreaGraphProps {
    data: DataItem[];
  }

const AreaGraph: React.FC<AreaGraphProps> = ({data}) => {
  return (
    <AreaChart
    width={500}
    height={400}
    data={data}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  )
}

export default AreaGraph