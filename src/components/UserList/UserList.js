import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './UserList.css';
import { Link } from 'react-router-dom';
import { UserDataService } from '../../services/UserDataService';
/**
 * The component displays the USerList of the User
 * @returns 
 */
const UserList = () => {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    let service = new UserDataService();
    setUsersList(service.getListUsers());
  }, []);

  return (
    <div className="UserList" data-testid="UserList">
      <ul>
        {
          usersList.map(
            (user) => <li key={user.id}>
              <Link to={"/dashboard/" + user.id}> {user.userInfos.firstName} </Link>
            </li>
          )
        }
      </ul>
    </div>
  );
}
UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;
