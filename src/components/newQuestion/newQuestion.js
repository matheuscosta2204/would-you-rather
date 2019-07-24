import React from 'react';

import CheckAuth from '../login/loginVerification';

const newQuestion = () => (
    <CheckAuth>
        <div>
            New Question
        </div>
    </CheckAuth>
);

export default newQuestion;