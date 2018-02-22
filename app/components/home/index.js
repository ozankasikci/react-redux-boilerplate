import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }

}

Home.propTypes = {
  questions: PropTypes.array.isRequired,
  typing: PropTypes.string.isRequired,
};

export default Home;
