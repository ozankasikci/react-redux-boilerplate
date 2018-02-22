import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/app/navbar';

const App = ({ children }) =>
  <div>
    <Navbar/>
    {children}
  </div>;

App.propTypes = {
  children: PropTypes.object
};

export default App;
