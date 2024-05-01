import React from 'react'
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell
  } from 'recharts';

  interface DataItem {
    name: string;
    value: number;
    }

    interface ScatterGraphProps {
    data: DataItem[];
    }


const ScatterGraph: React.FC<ScatterGraphProps> = ({data}) => {

  const COLORS = ['#ff4500', '#fcff82', '#ff1493', '#ff8c00', '#ffb6c1', '#ffa500', '#ff6347', '#ff69b4', '#ff7f50', '#ffc0cb'];

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
          <CartesianGrid strokeDasharray="2 3" stroke="#7fa99b" />
          <XAxis dataKey="name" name="Social Media" tick={{ fill: '#eee' }}/>
          <YAxis type="number" dataKey="value" name="Users" unit="mln" tick={{ fill: '#93e4c1' }} />
          <Tooltip cursor={{ strokeDasharray: '2 2'}} contentStyle={{ backgroundColor: '#eee',  border: '2px solid #93e4c1', borderRadius: '20%', fontWeight: '600' }}/>
          <Scatter name="Social media users" data={data} fill="#fcff82" shape="circle" activeShape="square">
          {
          data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          </Scatter>
        </ScatterChart>
  )
}

export default ScatterGraph