import React, { useEffect, useState } from 'react';
import './KPIChart.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { UserDataService } from '../../services/UserDataService';

/**
 * This component displays a PieChart with today score of the user 
 * @param {Number} props 
 * @returns 
 */
const KPIChart = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let service = new UserDataService();
    setData([service.getKPIModel(props.userScore)]);

  }, []);


  return (
    <div className="KPIChart" data-testid="KpiChart">
      <div className='KPIChart-label'>Score</div>
      {data &&
        <>
          <div className="legend-info"><div className='percentage'>{data[0].percent}%</div> de votre objectif</div>
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={data[0].score}
              dataKey="score"
            >
              <Cell fill="#E60000" />

            </Pie>
          </PieChart>
        </>
      }
    </div>
  );
}

export default KPIChart;
