import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CareerIdValueProvider from './context/idValueProvider';
import { greyForBg } from './assets/styles/colors';
import { LoaderProvider } from './hooks/use-loader';

const HomePage = lazy(() => import('../src/containers/HomePage'));
const CareerSectors = lazy(() => import('../src/containers/CareersSectors'));
const CareersListing = lazy(() => import('../src/containers/CareerListing'));
const CareerPage = lazy(() => import('./containers/CareerPage/index.jsx'));
const Overview = lazy(() => import('../src/containers/Overview'));
const video = lazy(() => import('../src/containers/VideoLibrary'));

const App = () => (
  <div className="App" style={{ backgroundColor: greyForBg, minHeight: '100vh' }}>
    <LoaderProvider>
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
    </LoaderProvider>
  </div>
);

export default App;
