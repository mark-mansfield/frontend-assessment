import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

// lets grab the history object in our Menu component so we can add a little
// styling to the active link

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: 'var(--yellow)' };
  } else {
    return { color: 'white' };
  }
};

const Menu = ({ history }) => (
  // lets use a fragment to wrap our component, we don't need un necessary divs!
  <Fragment>
    <ul className="nav nav-tabs bg-primary" id="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/exercise-1" style={isActive(history, '/exercise-1')}>
          exercise 1
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/exercise-2" style={isActive(history, '/exercise-2')}>
          exercise-2
        </Link>
      </li>
    </ul>
  </Fragment>
);

export default withRouter(Menu);
