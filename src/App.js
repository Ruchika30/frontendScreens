import React, { Component, Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CareerIdValueProvider from './context/idValueProvider';
import { greyForBg, pagewhite, paperColor } from './assets/styles/colors';
import { LoaderProvider } from './hooks/use-loader';
import './App.scss';

// const HomePage = lazy(() => import('../src/containers/HomePage'));
const CareerSectors = lazy(() => import('../src/containers/CareersSectors'));
const CareersListing = lazy(() => import('../src/containers/CareerListing'));
const CareerPage = lazy(() => import('./containers/CareerPage/index.jsx'));
const Overview = lazy(() => import('../src/containers/Overview'));
const video = lazy(() => import('../src/containers/VideoLibrary'));

const BlogLandingPage = lazy(() => import('../src/containers/BlogLandingPage'));
const BlogPage = lazy(() => import('../src/containers/blogPage'));
const CategoryPage = lazy(() => import('../src/containers/CategoryPage'));
const AboutPage = lazy(() => import('../src/containers/AboutPage'));
const HomePage = lazy(() => import('./containers/HomePage'));

const App = () => (
  <div className="App" style={{ backgroundColor: pagewhite, minHeight: '100vh' }}>
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

              <Route exact path="/blog" component={BlogLandingPage} />
              <Route exact path="/article" component={BlogPage} />
              <Route exact path="/category" component={CategoryPage} />
              <Route exact path="/about" component={AboutPage} />
            </CareerIdValueProvider>
          </Switch>
        </Suspense>
      </Router>
    </LoaderProvider>
  </div>
);

export default App;
