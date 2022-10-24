import React from 'react';
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
  const { id } = useParams();

  useEffect(() => {
    let service = new UserDataService();
    service.getUserMainDataById(id).then(data => {
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
            <ObjectifsChart idUser={data.id} />
            <PerformanceChart idUser={data.id} />
            <KPIChart userScore={data.todayScore} />
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

export default Dashboard;
