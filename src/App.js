import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import logo from './logo.svg';

const HomePage = lazy(() => import('../src/containers/HomePage'));
const CareersPage = lazy(() => import('../src/containers/CareersPage'));
const CareersListing = lazy(() => import('../src/containers/CareerListing'));

const App = () => (
  <div className="App">
    <Router>
      <Suspense fallback={<div className="loader centerLoader" />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/careers" component={CareersPage} />
          <Route exact path="/careers/:id" component={CareersListing} />


        </Switch>
      </Suspense>
    </Router>
  </div>
);

export default App;
