import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts'

interface DataItem {
  name: string;
  value: number;
}

interface LineGraphProps {
  data: DataItem[];
}

const LineGraph: React.FC<LineGraphProps> = ({data}) => {
  return (
    <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
  </LineChart>
  )
}

export default LineGraph