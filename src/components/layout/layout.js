import React from 'react';
import { Route } from 'react-router-dom';

import Toolbar from '../navigation/toolbar/toolbar';
import Home from '../home/home';
import Login from '../login/login';
import NewQuestion from '../newQuestion/newQuestion';
import LeaderBoard from '../leaderBoard/leaderBoard';
import Question from '../question/question';

const layout = () => (
    <>
      <Toolbar />
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/new-question" render={props => <NewQuestion {...props} />} />
      <Route exact path="/leader-board" render={props => <LeaderBoard {...props} />} />
      <Route exact path="/question/:id" render={props => <Question {...props} />} />
    </>
);

export default layout;