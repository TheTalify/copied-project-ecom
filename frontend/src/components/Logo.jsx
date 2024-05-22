import React from 'react'
import logo from '../assest/banner/logo.png'

const Logo = (props) => {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width: '80px', height: 'auto', display: 'inline-block', marginRight: "5px"}} />
      <p>PakZone</p>
    </div>
    
  ); 
};

export default Logo
