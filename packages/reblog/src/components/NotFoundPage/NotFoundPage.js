import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <center>
            <h3>Requested page not found! Go back to <Link to='/dashboard'>Dashboard</Link></h3>
        </center>
    )
}