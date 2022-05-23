import useAuth from '../../../hooks/useAuth'
import {Route,Redirect} from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      auth.isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/account",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

