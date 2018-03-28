import React from 'react';
import { Link } from 'react-router-dom';


const Users = () => (
  <div>
    <ul className="users">
      <li>
        <Link to="/users/1">User1</Link>：<Link to="/users/1/detail">Detail</Link>
      </li>
      <li>
        <Link to="/users/2">User2</Link>：<Link to="/users/2/detail">Detail</Link>
      </li>
    </ul>
  </div>
);

export default Users;