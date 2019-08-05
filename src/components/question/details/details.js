import React from 'react';
import { connect } from 'react-redux';

import './details.css';

const details = (props) => {
    const author = props.users[props.question.author];

    const totalVotes = props.question.optionOne.votes.length + props.question.optionTwo.votes.length;
    const optionOnePercent = props.question.optionOne.votes.length/totalVotes*100;
    const optionTwoPercent = props.question.optionTwo.votes.length/totalVotes*100;

    const authedUserAnswer = props.user.answers[props.question.id];

    const optionOneBoxClass = authedUserAnswer === 'optionOne' ? ["optionChoosed"] : [];
    const optionTwoBoxClass = authedUserAnswer === 'optionTwo' ? ["optionChoosed"] : [];

    return (
        <div className="vote-container">
            <div className="box">
                <header className="vote-header">
                    {author.name} asks:
                </header>
                <div className="vote-content">
                    <div>
                        <img src={author.avatarURL} height={150} width={150} alt="avatar" />
                    </div>
                    <div className="title">
                        <h1>Results:</h1>
                        <div className={optionOneBoxClass.join(' ')}>
                            Would you rather {props.question.optionOne.text}?
                            {authedUserAnswer === 'optionOne' && <p>Your vote</p>}
                            <div style={{ width: '100%', backgroundColor: 'gray', }}>
                                <div style={{ width: `${optionOnePercent}%`, backgroundColor: '#2DB79A', padding: 10, color: 'white', textAlign: 'center' }}>
                                    {optionOnePercent.toFixed(1)}%
                                </div>
                            </div>
                            <div>
                                {props.question.optionOne.votes.length} out of {totalVotes} votes
                            </div>
                        </div>
                        <div className={optionTwoBoxClass.join(' ')}>
                            Would you rather {props.question.optionTwo.text}?
                            {authedUserAnswer === 'optionTwo' && <p>Your vote</p>}
                            <div style={{ width: '100%', backgroundColor: 'gray' }}>
                                <div style={{ width: `${optionTwoPercent}%`, backgroundColor: '#2DB79A', padding: 10, color: 'white', textAlign: 'center' }}>
                                    {optionTwoPercent.toFixed(1)}%
                                </div>
                            </div>
                            <div>
                                {props.question.optionTwo.votes.length} out of {totalVotes} votes
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps ({ users, user }) {
    return { 
        users,
        user
    };
}

export default connect(mapStateToProps)(details);