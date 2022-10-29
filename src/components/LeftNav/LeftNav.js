import React from 'react';
import './LeftNav.css';
import PropTypes from 'prop-types';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import PoolIcon from '@mui/icons-material/Pool';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

/**
 * The component displays the LefNavBar of the application 
 * @param {} props 
 * @returns 
 */
const LeftNav = () => (
  <div className="LeftNav" data-testid="LeftNav">
    <ul>
      <li><SelfImprovementIcon /></li>
      <li><PoolIcon /></li>
      <li><DirectionsBikeIcon /></li>
      <li><FitnessCenterIcon /></li>
    </ul>
    <div className="copyRight">copyright, Sportsee 2020</div>
  </div>
);

LeftNav.propTypes = {};
LeftNav.defaultProps = {};
export default LeftNav;
