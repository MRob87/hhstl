import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import PatientList from './Components/PatientList';
import Patient from './Components/Patient';
import Incident from './Components/Incident'
import IncidentHistory from './Components/IncidentHistory'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/" exact component={PatientList} />
      <Route path="/patient/:id" exact component={Patient} />
      <Route path="/patientList" exact component={PatientList} />
      <Route path="/patient/:id/incident/:incidentId" exact component={Incident} />
      <Route path="/patients/:id/incidents" exact component={IncidentHistory} />
    </Switch>
  </BrowserRouter>
);