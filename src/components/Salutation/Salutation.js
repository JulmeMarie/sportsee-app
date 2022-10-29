import React from 'react';
import ProtoTypes from 'prop-types';
import './Salutation.css';

/**
 * This component is used to display a greeting to the user
 * @param {String} props 
 * @returns 
 */
const Salutation = (props) => {

  return (
    <div className="Salutation" data-testid="Salutation">
      <h1>Bonjour <span>{props.firstName} </span></h1>
      <div>Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
    </div>
  );
}

Salutation.propTypes = {
  firstName: ProtoTypes.string
};
Salutation.defaultProps = {};

export default Salutation;
