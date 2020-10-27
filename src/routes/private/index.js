import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { PATHS } from '@Constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // const { isLogged } = useSelector((state) => state.login);

  return (
    <Route
      {...rest}
      render={(props) => (
        true
          ? <Component {...props} />
          : <Redirect to={PATHS} />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
