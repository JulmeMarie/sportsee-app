import React from 'react';
import './TopNav.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
/**
 * The component displays the TopNavBar the of application 
 * @returns 
 */
const TopNav = () => {

  return (
    <div className="TopNav" data-testid="TopNav">
      <div className='logo'><img src={logo} alt="logo de SportSee" /></div>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">Profil</Link></li>
        <li><Link to="/">Reglage</Link></li>
        <li><Link to="/">Communauté</Link></li>
      </ul>
    </div>
  );
}

export default TopNav;
