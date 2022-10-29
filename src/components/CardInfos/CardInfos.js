import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CardInfos.css';

import { CardInfosService } from '../../services/CardInfosService';

/**
 * This component dislays the user's keydata in card format.
 * Like Calories, Protein, Carbohydrate and Lipid
 * @params {Number, String} props 
 * @returns 
 */
const CardInfos = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    let service = new CardInfosService();
    setData(service.cumputeData(props));
  }, []);

  return (
    <div className="CardInfos" data-testid="CardInfos">
      {data &&
        <>
          <div className='CardInfos-icon' style={data.style}>{data.icon} </div>
          <div className='CardInfos-details'>
            <div className='CardInfos-value'>{data.quantity} {data.unit}</div>
            <div className='CardInfos-name'>{data.name}</div>
          </div>
        </>
      }
    </div>
  );
}

CardInfos.propTypes = {
  quantity: PropTypes.number,
  name: PropTypes.string
};

CardInfos.defaultProps = {};
export default CardInfos;
