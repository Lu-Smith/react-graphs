import React from 'react'
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from 'recharts';

  interface DataItem {
    name: string;
    value: number;
    }

    interface ScatterGraphProps {
    data: DataItem[];
    }


const ScatterGraph: React.FC<ScatterGraphProps> = ({data}) => {
  return (
    <ScatterChart
        width={1000}
        height={420}
        margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
        }}
        >
          <CartesianGrid strokeDasharray="2 3" stroke="#feffdf" />
          <XAxis dataKey="name" name="Social Media" tick={{ fill: '#97cba9' }}/>
          <YAxis type="number" dataKey="value" name="Users" unit="mln" tick={{ fill: '#dde0ab' }} />
          <Tooltip cursor={{ strokeDasharray: '1 1' }} />
          <Scatter name="Social media users" data={data} fill="#dc2f2f" shape="square"     dot={{ 
        r: 8, // Adjust the size of the squares as needed
        fill: '#dc2f2f' // Adjust the color of the squares if needed
    }} />
        </ScatterChart>
  )
}

export default ScatterGraph