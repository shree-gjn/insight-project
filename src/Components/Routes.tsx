import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import Workflow from './Workflow/Workflow';
import InnerContent from './InnerContent';
import Database from './Database/Database';
import Visualisation from './Visualisation/Settings';
import Login from './Login';

import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

const MainRoutes=()=> {
    return <div>
        { <Routes>
            <Route path="/" element={<ProtectedRoutes />} >
            <Route path="/" element={<InnerContent />} />
            <Route path="/" element={<Navigate replace to="workflow" />} />
            <Route path="workflow" element={<Workflow />} />
            <Route path="database" element={<Database />} />
            <Route path="visualisation" element={<Visualisation />} />
            </Route>

            <Route>
            <Route path="login" element={<Login />}></Route>
            </Route>
        </Routes>
         }
    </div>
}

export default MainRoutes;