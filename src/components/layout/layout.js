import React from 'react';
import { Route } from 'react-router-dom';

import Toolbar from '../navigation/toolbar/toolbar';
import Home from '../home/home';
import Login from '../login/login';
import NewQuestion from '../newQuestion/newQuestion';
import LeaderBoard from '../leaderBoard/leaderBoard';

const layout = () => (
    <>
      <Toolbar />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/new-question" render={() => <NewQuestion />} />
      <Route exact path="/leader-board" render={() => <LeaderBoard />} />
    </>
);

export default layout;