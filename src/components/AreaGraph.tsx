import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

interface DataItem {
    name: string;
    value: number;
  }
  
  interface AreaGraphProps {
    data: DataItem[];
  }

const AreaGraph: React.FC<AreaGraphProps> = ({data}) => {

  const UNIT = 'mln'; 
  return (
    <ResponsiveContainer>
      <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
      >
          <CartesianGrid strokeDasharray="3 3" stroke="#f1b963"/>
          <XAxis dataKey="name" tick={{ fill: '#ff7e67' }}/>
          <YAxis unit="mln" tick={{ fill: '#f1b963' }}/>
          <Tooltip 
            content={({ payload }) => {
              if (payload && payload.length > 0) {
                const { name, value } = payload[0].payload;
                return (
                  <div style={{ backgroundColor: '#dfd3c3', color: '#222831', padding: '20px 15px', margin: '0', borderRadius: '5px', width: '130px', border: '2px solid #c7b198' }}>
                    <p style={{ color: '#c24d2c', fontWeight: 'bold', margin: '0'}}>{`${name}`}</p>
                    <p style={{ margin: '0'}}>{`${value}${UNIT} people`}</p>
                  </div>
                );
              }
              return null;
            }}/>
          <Area type="monotone" dataKey="value" stackId="1" stroke="#c24d2c" fill="#ff7e67" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default AreaGraph