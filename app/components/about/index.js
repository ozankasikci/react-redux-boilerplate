import React from 'react';
import { Link } from 'react-router';

const About = () =>
  <div>
    Hello this is about component. If you like this boilerplate useful, consider starring the repo :)
    <div>
      <iframe
        src="https://ghbtns.com/github-btn.html?user=ozankasikci&repo=react-redux-boilerplate&type=star&size=large"
        frameBorder="0"
        allowTransparency="true"
        scrolling="0">
      </iframe>
    </div>
    <Link to="/">Back to Home</Link>
  </div>;


export default About;
