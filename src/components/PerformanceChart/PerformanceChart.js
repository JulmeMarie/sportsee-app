import React, { useEffect, useState } from 'react';
import ProtoTypes from 'prop-types'
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './PerformanceChart.css';
import { UserPeformanceService } from '../../services/UserPerformanceService';
/**
 * This component displays a PerformanceChart of the user.
 * @param {Number} props 
 * @returns 
 */
const PerformanceChart = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let service = new UserPeformanceService();

    //Get data from mock
    //setData(service.getDataMockByUserId(props.idUser));

    service.getDataByUserId(props.idUser).then(data => {
      setData(data);
    })
  }, []);

  return (
    <div className="PerformanceChart" data-testid="PerformanceChart">
      {data &&
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" fontSize={9} />
            <PolarRadiusAxis angle={30} />
            <Radar legendType='none' dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.7} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      }
    </div>
  );
}

PerformanceChart.propTypes = {
  idUser: ProtoTypes.number
};
PerformanceChart.defaultProps = {};
export default PerformanceChart;
