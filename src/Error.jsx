import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h3>Error 404</h3>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default Error;