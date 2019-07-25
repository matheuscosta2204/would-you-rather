import React from 'react';
import './questionsList.css';

const questionsList = (props) => {
    //console.log(props.questions);
    return (
        <div className="list-container">
            {props.questions.map(question => (
                <div>{question.id}</div>
            ))}
        </div>
    );
}

export default questionsList;