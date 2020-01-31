import React from 'react';
import { Redirect } from 'react-router-dom';

const LogOut = () => {
    localStorage.removeItem('token')
    return <Redirect to='/'/>;
};

export default LogOut;