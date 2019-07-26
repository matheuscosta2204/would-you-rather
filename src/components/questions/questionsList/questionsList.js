import React from 'react';
import './questionsList.css';

const questionsList = (props) => {
    return (
        <div className="list-container">
            {props.questions.map(question => (
                <div key={question.id} onClick={() => props.onClick(question.id)}>{question.id}</div>
            ))}
        </div>
    );
}

export default questionsList;