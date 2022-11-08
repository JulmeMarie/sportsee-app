import React, { useEffect, useState } from 'react';
import './ActivityChart.css';
import PropTypes from 'prop-types';
import { BarChart, ResponsiveContainer, Text, Tooltip, Legend, XAxis, YAxis, Bar, CartesianGrid } from 'recharts';
import { UserActivityService } from '../../services/UserActivityService';

/**
 * This component displays a BarChart with the weight and the calories of the users.
 * @param {Number} props 
 * @returns 
 */
const ActivityChart = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {

    let service = new UserActivityService();

    //Get data from the service
    service.getActivityData(props.idUser).then(data => {
      setData(data);
    });

  }, []);

  //Here we're customizing the tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-kilogram">{`${payload[0].value} kg`}</p>
          <p className="tooltip-calories">{`${payload[1].value} kcal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="ActivityChart" data-testid="ActivityChart">
      <div className='barchart-details'>
        <div className='barchart-name'>Activité quotidienne</div>
        <div className='barchart-labels'>
          <div className='label-poids'> <div className="disk"></div>Poids (Kg)</div>
          <div className='label-calories'><div className="disk"></div> Calories brûlées (kCal)</div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Bar barSize={10} dataKey="kilogram" unit="kg" fill="#282D30" />
          <Bar barSize={10} dataKey="calories" unit="kcal" fill="#FF0000" />
          <XAxis />
          <YAxis orientation='right' />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(196,196,196,0.5' }} wrapperStyle={{ outline: 'none' }} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

ActivityChart.propTypes = {
  idUser: PropTypes.number
};

ActivityChart.defaultProps = {};
export default ActivityChart;
