import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import Cart from './Components/Cart';
import PatientList from './Components/PatientList';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/patientList" exact component={PatientList} />
      <Route path="/" component={Cart} />
    </Switch>
  </BrowserRouter>
);