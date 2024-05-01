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
  
  const UNIT = 'mln'; 

  return (
    <LineChart width={900} height={400} data={data}>
    <CartesianGrid strokeDasharray="2 2" />
    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} tick={{ fill: '#ff7e67' }} />
    <YAxis tick={{ fill: '#ffe9e3' }} />
    <Tooltip
      content={({ payload }) => {
        if (payload && payload.length > 0) {
          const { name, value } = payload[0].payload;
          return (
            <div style={{ backgroundColor: '#393e49', padding: '1px 15px', borderRadius: '5px', border: '2px solid red' }}>
              <p style={{ color: '#ff7e67'}}>{`${name}`}</p>
              <p>{`${value}${UNIT} users`}</p>
            </div>
          );
        }
        return null;
      }}
    />
    <Legend 
       content={() => {
        return (
            <div style={{ color: '#ffe9e3' }}> {/* Change color as per your preference */}
                Social Media Users in mln.
            </div>
        );
    }}/>
    <Line type="monotone" dataKey="value" stroke="red" activeDot={{ r: 10 }} />
  </LineChart>
  )
}

export default LineGraph