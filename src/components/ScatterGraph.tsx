import React from 'react'
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
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
        height={400}
        margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
        }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" name="Social Media"/>
          <YAxis type="number" dataKey="value" name="Users" unit="mln" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Social media users" data={data} fill="#8884d8" shape="star" />
        </ScatterChart>
  )
}

export default ScatterGraph