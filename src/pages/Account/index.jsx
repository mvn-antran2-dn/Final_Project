import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGES } from '../../assets/images';
import userAuth from '../../hooks/useAuth';

export default function Account() {
  let {login} = userAuth();
  const user = JSON.parse(localStorage.getItem("user"));
  const dataAdmin = JSON.parse(localStorage.getItem("accounts"));
  const { isLogger, logout } = userAuth();

  if (isLogger === true) {
   dataAdmin.find((item) => {
      return (user.username === item.username )       
    });
  }
  return  login ? (
      <div className="container auth flex align-items-center page-account">
        <p className="auth-title">Welcome <img src={IMAGES.imgAdmin} alt='Admin'/></p>
        <div className='section-account'>      
          <img  src={IMAGES.imgAvatar} alt="Avatar" className='avatar-img'/>
          <div className='account-title'>
            <p>Email: <span> {user.username}</span></p>
            <div className='button-account' >
              <Button className='btn-account'>
                <NavLink activeClassName="active" to="/home" >
                  <img  src={IMAGES.imgExit} alt="Exit" className='exit-img'/> <span>Go to home</span>
                </NavLink>
              </Button>
              <Button className='btn-account'>
                <NavLink activeClassName="active" to="/" onClick={() => logout()} >
                <img  src={IMAGES.imgLogout} alt="logout" className='Logout-img'/><span>Logout</span> 
                </NavLink>
              </Button>
            </div> 
          </div>       
        </div>
      </div>
    ) : (
      <p className="container auth">You are not logged in.</p>
    );
}
