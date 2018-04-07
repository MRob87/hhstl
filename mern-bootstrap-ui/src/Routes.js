import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import PatientList from './Components/PatientList';
import Patient from './Components/Patient';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/" exact component={PatientList} />
      <Route path="/patient/:id" exact component={Patient} />
    </Switch>
  </BrowserRouter>
);