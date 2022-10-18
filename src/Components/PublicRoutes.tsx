import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const UseAuth=() => {
    const user=localStorage.getItem('user')
    if(user){
        return true //we can use from actual server or context
    }
    else {
        return false
    }
}

const PublicRoutes=(props:any) => {
    const auth=UseAuth()
    return auth?  <Navigate to="/workspace" />: <Outlet />
}

export default PublicRoutes;