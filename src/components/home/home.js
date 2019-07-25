import React from 'react';
import { connect } from 'react-redux';

import './home.css';
import CheckAuth from '../login/loginVerification';
import QuestionsList from '../questions/questionsList/questionsList';
import { getQuestions } from '../../actions/question';

class Home extends React.Component {

    state = {
        tab: null
    }

    componentDidMount() {
        this.props.dispatch(getQuestions()).then(() => {
            this.setState({ tab: 'unanswered' });
        });
    }

    onChangeTab = (tab) => this.setState({ tab });

    render() {
        
        const unansweredClass = this.state.tab === 'unanswered' ? ["header-item", "active"] : ["header-item"];
        const answeredClass = this.state.tab === 'answered' ? ["header-item", "active"] : ["header-item"];

        const questions = 
            this.state.tab === 'unanswered' 
                ? this.props.questions.filter(question => !Object.keys(this.props.user.answers).includes(question.id))
                : this.props.questions.filter(question => Object.keys(this.props.user.answers).includes(question.id));

        return (
            <CheckAuth>
                <div className="container">
                    <div className="box">
                        <div className="box-header">
                            <div 
                                onClick={() => this.onChangeTab('unanswered')} 
                                className={unansweredClass.join(' ')}>Unanswered Questions</div>
                            <div 
                                onClick={() => this.onChangeTab('answered')}  
                                className={answeredClass.join(' ')}>Answered Questions</div>
                        </div>
                        <QuestionsList questions={questions} />
                    </div>
                </div>
            </CheckAuth>
        );
    }
}

function mapStateToProps ({ question, user }) {
    return { 
        questions: Object.keys(question).map(key => {
            return question[key];
        }), 
        user };
}

export default connect(mapStateToProps)(Home);