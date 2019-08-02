import React from 'react';

import './questionsList.css';
import QuestionItem from '../questionItem/questionItem';

const questionsList = (props) => {
    return (
        <div className="list-container">
            {props.questions.map(question => (
                <QuestionItem 
                    key={question.id} 
                    onClick={props.onClick} 
                    question={question} />
            ))}
        </div>
    );
}

export default questionsList;