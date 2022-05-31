import userAuth from '../../../hooks/useAuth'
import {Route,Redirect} from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  let auth = userAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      auth.isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

