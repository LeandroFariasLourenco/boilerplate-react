import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { PATHS } from '@Constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const condicao = false || true;

  return (
    <Route
      {...rest}
      render={(props) => (
        condicao
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
