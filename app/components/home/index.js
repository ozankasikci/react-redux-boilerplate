import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './style';

class Home extends Component {

  render() {
    const s = style(this.props, this.state);

    return (
      <div style={s.container}>
        <p>
          Hello, this is home component. You can press ctrl+h to hide the dock
          monitor on the right. Look at utils/dev-tools for its configuration.
        </p>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
