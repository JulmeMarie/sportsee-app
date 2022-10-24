import React, { useEffect, useState } from 'react';
import './ObjectifsChart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { UserAverageSessionService } from '../../services/UserAverageSessionService';

/**
 *  This component displays a ObjectifChart of the user. 
 * @param {Number} props 
 * @returns 
 */
const ObjectifsChart = (props) => {
  const [data, setData] = useState([]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-mn">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  }

  useEffect(() => {
    let service = new UserAverageSessionService();
    service.getAverageSessionData(props.idUser).then(data => {
      setData(data);
    })

  }, []);

  return (
    <div className="ObjectifsChart" data-testid="ObjectifsChart">
      <div className='dureeSession'>Durée moyenne de sessions</div>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart width="100%" height="100%" data={data}>
          <Line type="monotone" dataKey="duration" stroke="#8884d8" strokeWidth={2} />
          <XAxis dataKey="day" strokeWidth={0} stroke="white" />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ObjectifsChart;
