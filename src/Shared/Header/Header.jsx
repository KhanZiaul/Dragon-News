import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
         <img src={logo} alt="" />
         <p>Journalism Without Fear or Favour</p>
         <p>{moment().format()}</p>
        </div>
    );
};

export default Header;