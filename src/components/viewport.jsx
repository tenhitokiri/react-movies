import { Nav } from './nav';
import React from 'react';
import { Outlet } from "react-router-dom";


const Viewport = () => {
    return (
        <>
            <Nav />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Viewport;
