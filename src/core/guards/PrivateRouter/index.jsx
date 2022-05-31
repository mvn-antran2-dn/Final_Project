import userAuth from '../../../hooks/useAuth'
import {Route,Redirect} from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  let {isLogin} = userAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      isLogin ? (
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

