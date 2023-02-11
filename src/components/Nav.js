import React, { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

const Nav = () => {
  const nevigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    nevigate('/signup');
  }

  const auth = localStorage.getItem('user');

  return (
    <>
      
     
      
      {
        auth?<ul className='nav-ul'>
              <li><Link to='/'>Products</Link></li>
              <li><Link to='/add'>Add Products</Link></li>
              <li><Link to='/update'>Update Products</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name}) </Link></li>

        </ul>
          :
          <ul className='nav-ul nav-right'>
          <li>  <Link to='/signup'>Signup</Link>  </li>
              <li><Link to='/login'>Login</Link></li>

          </ul>
         
     }
            
      
      </>
  )
}

export default Nav;
