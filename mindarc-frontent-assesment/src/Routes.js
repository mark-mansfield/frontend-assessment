import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';

// here the BrowserRouter component and the Switch component work together
// to allow different paths to be matched to different components
// the  default route goes to exercise 1
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Exercise1} />
        <Route path="/exercise-1" exact component={Exercise1} />
        <Route path="/exercise-2" exact component={Exercise2} />
        <Route path="/*" exact component={Exercise1} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
