import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface DataItem {
    name: string;
    value: number;
  }
  
  interface BarGraphProps {
    data: DataItem[];
  }

const BarGraph: React.FC<BarGraphProps> = ({data}) => {

  const COLORS = ['#0092ca', '#009688', '#8594e4', '#00BFA5', '#4DB6AC', '#42b883', '#5585b5', '#53a8b6', '#66bfbf', '#407088'];
  const UNIT = 'mln'; 

  return (
    <ResponsiveContainer>
      <BarChart
          data={data}
          margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
          }}
          barSize={40}
      >
          <XAxis dataKey="name" scale="point" padding={{ left: 15, right: 20 }} tick={{ fill: '#8dc6ff' }} />
          <YAxis unit="mln" tick={{ fill: '#ffe9e3' }}/>
          <Tooltip 
          content={({ payload }) => {
            if (payload && payload.length > 0) {
              const { name, value } = payload[0].payload;
              return (
                <div style={{ backgroundColor: '#34495e', padding: '3px 15px', borderRadius: '15px' }}>
                  <p>{`${name}: ${value}${UNIT} users.`}</p>
                </div>
              );
            }
            return null;
          }}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Bar 
          dataKey="value" 
          background={{ fill: '#eee' }} 
          >
          {
            data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
          </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarGraph