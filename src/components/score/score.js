import React from 'react';

import './score.css';

const score = (props) => {
    return (
        <div className="score-container">
            <div className="score-content">
                <div>
                    <img src={props.user.avatarURL} height={150} width={150} alt="avatar" />
                </div>
                <div className="middle">
                    <h1>{props.user.name}</h1>
                    <div>
                        Answered questions {Object.keys(props.user.answers).length}
                    </div>
                    <div>
                        Answered questions {props.user.questions.length}
                    </div>
                </div>
                <div className="score">
                    <h2>Score</h2>
                    <h1>{props.user.questions.length + Object.keys(props.user.answers).length}</h1>
                </div>
            </div>
        </div>
    )
}

export default score;