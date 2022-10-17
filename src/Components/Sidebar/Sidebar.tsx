import React from "react";
import '../Sidebar/style.css';
import {Link} from "react-router-dom";

const Sidebar=() => {
    return <div className="sidebar">
        <div className="sidebar__items">
            <Link to="/workflow">Workflow</Link>
            <Link to="/database">Database</Link>
            <Link to="/visualisation">Visualisation</Link>
        </div>
    </div>
}

export default Sidebar;