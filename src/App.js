import React,{ Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Header, Footer} from "./components/Layout";
import Login from "./pages/Auth/Login";
import Account from './pages/Account';
import PrivateRoute from './core/guards/PrivateRouter';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feature  = React.lazy(()=> import("./pages/Features") );
function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>     
      <Switch>
        <PrivateRoute path="/account">
          <Header />
          <Account />
          <Footer />
        </PrivateRoute>
        <Route path="/product">
          <Header />
          <Feature/>
          <Footer />
        </Route>
        <Route path="/">
          <Login />
          <ToastContainer
            position="top-center"
            autoClose={3000} />
        </Route>
      </Switch>
    </Suspense>
    </>
  );
}

export default App;
