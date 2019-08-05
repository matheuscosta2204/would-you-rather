import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Toolbar from '../navigation/toolbar/toolbar';
import Home from '../home/home';
// import Login from '../login/login';
import NewQuestion from '../newQuestion/newQuestion';
import LeaderBoard from '../leaderBoard/leaderBoard';
import Question from '../question/question';
import Error from '../error/404';

const layout = () => (
    <>
      <Toolbar />
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        {/* <Route exact path="/login" render={props => <Login {...props} />} /> */}
        <Route exact path="/add" render={props => <NewQuestion {...props} />} />
        <Route exact path="/leaderboard" render={props => <LeaderBoard {...props} />} />
        <Route exact path="/question/:id" render={props => <Question {...props} />} />
        <Route component={Error} />
      </Switch>
    </>
);

export default layout;