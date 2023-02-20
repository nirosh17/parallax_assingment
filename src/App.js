import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

import './styles/main.scss';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/niro" component={LandingPage} />
    </Switch>
  );
};
export default App;
