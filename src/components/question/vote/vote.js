import React from 'react';
import { connect } from 'react-redux';

import { saveQuestionAnswer } from '../../../actions/question';
import './vote.css';

class Vote extends React.Component {

    state = {
        option: "optionOne",
    }

    onOptionChanged = (e) => {
        this.setState({ option: e.target.value });
    }

    submit = (authedUser, qid) => {
        this.props.dispatch(saveQuestionAnswer({
            authedUser,
            qid,
            answer: this.state.option
        }));
    }

    render() {
        const author = this.props.users[this.props.question.author];
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
                            <h1>Would You Rather...</h1>
                            <div>
                                <input type="radio" name="option" 
                                    value="optionOne" 
                                    checked={this.state.option === "optionOne"} 
                                    onChange={this.onOptionChanged} /> {this.props.question.optionOne.text}
                            </div>
                            <div>
                                <input type="radio" name="option" 
                                    value="optionTwo" 
                                    checked={this.state.option === "optionTwo"} 
                                    onChange={this.onOptionChanged} /> {this.props.question.optionTwo.text}
                            </div>
                            <div>
                                <button onClick={() => this.submit(this.props.user.id, this.props.question.id)} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ users, user }) {
    return { 
        users,
        user
    };
}

export default connect(mapStateToProps)(Vote);