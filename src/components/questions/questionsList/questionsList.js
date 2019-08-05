import React from 'react';

import './questionsList.css';
import QuestionItem from '../questionItem/questionItem';

const questionsList = (props) => {
    const questions = props.questions.sort(compare);
    return (
        <div className="list-container">
            {questions.map(question => (
                <QuestionItem 
                    key={question.id} 
                    onClick={props.onClick} 
                    question={question} />
            ))}
        </div>
    );
}

function compare( a, b ) {
    const aLength = a.timestamp;
    const bLength = b.timestamp;

    let comparison = 0;
    if(aLength < bLength) {
        comparison = 1;
    } else {
        comparison = -1;
    }
    return comparison;
}

export default questionsList;