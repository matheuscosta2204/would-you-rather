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

        const questions = Object.keys(this.props.question);

        return (
            <CheckAuth>
                <div className="container">
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
            </CheckAuth>
        );
    }
}

function mapStateToProps ({ question }) {
    return { question };
}

export default connect(mapStateToProps)(Home);