

import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/useAuthContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function PrivateRouter({isAuthentication}) {
    const isAuth = localStorage.getItem('isAuth') | isAuthentication;

    return isAuth   ? <Outlet /> : <Navigate to="/" />
}
