import React from 'react';

const error = ({ location }) => (
    <div style={{ textAlign: 'center' }}>
        <h1>404 Error!</h1>
        <h3>location <code>{location.pathname}</code> not found!</h3>
    </div>
);

export default error;