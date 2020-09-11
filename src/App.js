import React, { Component } from "react";
import { HashRouter, Route, Switch,Redirect } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from "react-spinners/DotLoader";
import "./App.scss";
import Loader from "react-spinners/CircleLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
//const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const loading = () => (
  <div> 
  </div>
);
// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Qrscanner=React.lazy(()=>import("./views/Pages/Qrscanner"));
const Loaders = React.lazy(()=>import("./views/Pages/Loader"));
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));
const MainPage= React.lazy(() => import("./views/Pages/MainPage/MainPage"));

const PrivateRouteUser = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    //fakeAuth.isAuthenticated === true
    localStorage.getItem("AccessToken")!==""
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/#/login',
         
        }} />
       
  )} />
)

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Switch>

          <Route
              exact
              path="/"
              name="Loader Page"
              render={(props) => <Loaders {...props} />}
            />


              <Route
              exact
              path="/scan"
              name="Qrscanner Page"
              render={(props) => <Qrscanner {...props} />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />

<Route
              exact
              path="/main"
              name="Main Page"
              render={(props) => <MainPage {...props} />}
            />

            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
