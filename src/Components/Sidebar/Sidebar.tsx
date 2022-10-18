import React from "react";
import '../Sidebar/style.css';
import {Link, useLocation, useNavigate} from "react-router-dom";

const Sidebar=() => {
    const UseAuth=() => {
        const user=localStorage.getItem('user')
        if(user){
            return true //we can use from actual server or context
        }
        else {
            return false
        }
    }
    
    const user=UseAuth()
    const location=useLocation()
    const navigation=useNavigate()

    const logout=() => {
        localStorage.removeItem('user')
        navigation('/login ')
    }

    return <div className="sidebar">
        <div className="sidebar__items">
            {
                user && <>
                    <Link to="/workflow" className={location.pathname==='/workflow'?'sidebar_active':''}>Workflow</Link>
                    <Link to="/database" className={location.pathname==='/database'?'sidebar_active':''}>Database</Link>
                    <Link to="/visualisation" className={location.pathname==='/visualisation'?'sidebar_active':''}>Visualisation</Link>
                    {
                        location.pathname!=='/login' && <button onClick={logout}>logout</button>
                    }
                </>
            }
        </div>
    </div>
}

export default Sidebar;