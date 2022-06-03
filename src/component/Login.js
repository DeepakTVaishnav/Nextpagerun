import React from 'react';
import {Link} from 'react-router-dom';

function Login(){
  return(
    <>
    <input type="text" placeholder="Enter your name" />
    <input type="password" placeholder="Enter your name" />
    
    <Link to="/content"><input type="Submit" /></Link>
    </>
  )
}

export default Login;