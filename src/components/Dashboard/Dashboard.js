import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserDataService } from '../../services/UserDataService';
import './Dashboard.css';
import ActivityChart from '../ActivityChart/ActivityChart';
import ObjectifsChart from '../ObjectifsChart/ObjectifsChart';
import PerformanceChart from '../PerformanceChart/PerformanceChart';
import KPIChart from '../KPIChart/KPIChart';
import CardInfos from '../CardInfos/CardInfos';
import Salutation from '../Salutation/Salutation';
/**
 * This component displays the Dashboard for the user 
 * @returns 
 */
const Dashboard = () => {

  const [data, setData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    let service = new UserDataService();

    //Get data from mock
    //setData(service.getUserMainDataMockById(id));

    service.getUserMainDataById(userId).then(data => {
      setData(data);
    });
  }, []);

  return (
    <div className="Dashboard" data-testid="Dashboard">
      {data &&
        <>
          <Salutation firstName={data.userInfos.firstName} />
          <section className='main-section'>
            <ActivityChart idUser={data.id} />
            <div className='flex-wrapper'>
              <ObjectifsChart idUser={data.id} />
              <PerformanceChart idUser={data.id} />
              <KPIChart userScore={data.todayScore} />
            </div>
          </section>
          <section className='right-section'>
            <CardInfos quantity={data.keyData.calorieCount} name="calories" />
            <CardInfos quantity={data.keyData.proteinCount} name="protéines" />
            <CardInfos quantity={data.keyData.carbohydrateCount} name="glucides" />
            <CardInfos quantity={data.keyData.lipidCount} name="lipides" />
          </section>
        </>
      }
    </div>
  );
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
export default Dashboard;
