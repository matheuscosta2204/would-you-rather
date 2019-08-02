import React from 'react';
import { connect } from 'react-redux';

import './questionItem.css';
import { maxLenght } from '../../../util/util';

const questionItem = (props) => {
    return (
        <div className="item-container">
            <div className="item-header">{props.user.name} asks:</div>
            <div className="item-content">
                <div className="item-pic"></div>
                <div className="item-question">
                    <p className="item-question-title">Would you rather</p>
                    <p>...{maxLenght(props.question.optionOne.text)}...</p>
                    <button onClick={() => props.onClick(props.question.id)}>View Poll</button>
                </div>
            </div>
        </div>
    )
};

function mapStateToProps ({ user }) {
    return { user };
}

export default connect(mapStateToProps)(questionItem);