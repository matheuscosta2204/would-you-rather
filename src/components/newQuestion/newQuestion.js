import React from 'react';
import { connect } from 'react-redux';

import { saveQuestion } from '../../actions/question';
import CheckAuth from '../login/loginVerification';

class NewQuestion extends React.Component {

    state = {
        optionOneText: "",
        optionTwoText: "",
    }

    onFirstOptionChange = e => this.setState({ optionOneText: e.target.value });
    
    onSecondOptionChange = e => this.setState({ optionTwoText: e.target.value });

    setQuestion = () => {
        this.props.dispatch(saveQuestion({
            optionOneText: this.state.optionOneText, 
            optionTwoText: this.state.optionTwoText, 
            author: this.props.user.id 
        })).then(res => {
            this.props.history.push('');
        })
    }

    render() {
        return (
            <CheckAuth>
                <div className="container">
                    <div>
                        <label>First Option</label>
                        <input onChange={e => this.onFirstOptionChange(e)} value={this.state.optionOneText} />
                    </div>
                    <div>
                        <label>Second Option</label>
                        <input onChange={e => this.onSecondOptionChange(e)} value={this.state.optionTwoText} />
                    </div>
                    <button onClick={() => this.setQuestion()}>Insert Question</button>
                </div>
            </CheckAuth>
        )
    }
};

function mapStateToProps ({ user }) {
    return { user };
}

export default connect(mapStateToProps)(NewQuestion);