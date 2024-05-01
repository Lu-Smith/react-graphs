import React from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer} from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

interface PieGraphProps {
  data: DataItem[];
}

const PieGraph: React.FC<PieGraphProps> = ({data}) => {

  const COLORS = ['#ff9a3c', '#66bfbf', '#ffb5b5', '#c7b198', '#a393eb', '#ef5a5a', '#668ba4', '#906387', '#118a7e', '#fbf2d5', '#f8da5b'];
  const UNIT = 'mln'; 

  return (
    <ResponsiveContainer>
    <PieChart>
        <Pie
        dataKey="value"
        isAnimationActive={true}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={110}
        stroke="grey"
        label={(entry) => entry.name}
        >
          {
          data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
        </Pie>
        <Tooltip
          content={({ payload }) => {
            if (payload && payload.length > 0) {
              const { name, value } = payload[0].payload;
              return (
                <div style={{ backgroundColor: '#000', padding: '3px 15px', borderRadius: '5px' }}>
                  <p>{`${name}: ${value}${UNIT} users.`}</p>
                </div>
              );
            }
            return null;
          }}
        />
    </PieChart>
    </ResponsiveContainer>
  )
}

export default PieGraph