import React from 'react';

import CheckAuth from '../login/loginVerification';

const error = ({ location }) => (
    <CheckAuth>
        <div style={{ textAlign: 'center' }}>
            <h1>404 Error!</h1>
            <h3>location <code>{location.pathname}</code> not found!</h3>
        </div>
    </CheckAuth>
);

export default error;