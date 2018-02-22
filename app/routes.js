import React from 'react';
import { Route } from 'react-router';
import About from 'components/about/';
import Home from 'containers/home';

export default (
  <div>
    <Route path="/" component={Home}/>
    <Route path="/about" component={About}/>
  </div>
);
