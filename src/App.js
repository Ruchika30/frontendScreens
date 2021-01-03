import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CareerIdValueProvider from './context/idValueProvider';

const HomePage = lazy(() => import('../src/containers/HomePage'));
const CareerSectors = lazy(() => import('../src/containers/CareersSectors'));
const CareersListing = lazy(() => import('../src/containers/CareerListing'));
const CareerPage = lazy(() => import('../src/containers/CareerPage'));
const Overview = lazy(() => import('../src/containers/Overview'));
const video = lazy(() => import('../src/containers/VideoLibrary'));

const App = () => (
  <div className="App">
    <Router>
      <Suspense fallback={<div className="loader centerLoader" />}>
        <Switch>
          <CareerIdValueProvider>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/sectors" component={CareerSectors} />
            <Route exact path="/careers/:id" component={CareersListing} />
            <Route exact path="/career/:id" component={CareerPage} />
            <Route exact path="/overview/:id" component={Overview} />
            <Route exact path="/video" component={video} />

          </CareerIdValueProvider>
        </Switch>
      </Suspense>
    </Router>
  </div>
);

export default App;
