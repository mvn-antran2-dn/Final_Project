import { RollbackOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGES } from '../../assets/images';
import userAuth from '../../hooks/useAuth';


export default function Account() {
  let {login} = userAuth();
  return  login ? (
      <div className="container auth flex align-items-center">
        <p className="auth-title">Welcome <img src={IMAGES.imgAdmin} alt='Admin'/></p>
        <div className='page-account'>      
          <img  src={IMAGES.imgAvatar} alt="Avatar" className='avatar-img'/>
          <div className='account-title'>
            <p>Admin: <span>Trần Ngọc An</span></p>
            <p>Email: <span>An.tran2@monstar-lab.com</span></p>
            <Button className='btn-account'>
              <NavLink activeClassName="active" to="/home" >
                <RollbackOutlined /> Go to home
              </NavLink>
            </Button>
          </div>       
        </div>
      </div>
    ) : (
      <p className="container auth">You are not logged in.</p>
    );
}
