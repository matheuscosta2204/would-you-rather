import React from 'react';
import { connect } from 'react-redux';

import CheckAuth from '../login/loginVerification';
import Vote from './vote/vote.js';
import Details from './details/details.js';

class Question extends React.Component {

    state = {
        id: null
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({ id: params.id });
    }

    _render = (id, question) => {
        if(id !== null && typeof question !== 'undefined') {
            if(question.optionOne.votes.includes(this.props.user.id) || question.optionTwo.votes.includes(this.props.user.id)) {
                return <Details question={question} />
            } else {
                return <Vote question={question} />
            }
        }
        return <></>;
    }

    render() {
        const question = this.props.question[this.state.id];
        return (
            <CheckAuth>
                {this._render(this.state.id, question)}
            </CheckAuth>
        )
    }
}

function mapStateToProps ({ question, user }) {
    return { question, user };
}

export default connect(mapStateToProps)(Question);