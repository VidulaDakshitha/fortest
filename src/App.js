import React, { Component } from "react";
import { HashRouter, Route, Switch,Redirect,BrowserRouter as Router } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import DotLoader from "react-spinners/DotLoader";
import "./App.scss";
import Loader from "react-spinners/CircleLoader";
import "./style.css";
import HomePage from "./views/Pages/HomePage/HomePage";
import Loaders from "./views/Pages/Loader";
import Register from "./views/Pages/Register";
import Menupage from "./views/Menu/Card" ;
import RegisterConfirm from "./views/Pages/RegisterConfirm/RegisterConfirm" ;
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
// const HomePage=React.lazy(() => import("./views/Pages/HomePage/HomePage"));
// const Qrscanner=React.lazy(()=>import("./views/Pages/Qrscanner"));
// const Loaders = React.lazy(()=>import("./views/Pages/Loader"));
// const Login = React.lazy(() => import("./views/Pages/Login"));
// const Register = React.lazy(() => import("./views/Pages/Register"));
// const Page404 = React.lazy(() => import("./views/Pages/Page404"));
// const Page500 = React.lazy(() => import("./views/Pages/Page500"));
// const MainPage= React.lazy(() => import("./views/Pages/MainPage/MainPage"));
// const Menupage=React.lazy(() => import("./views/Menu/Card"));
// const RegisterConfirm=React.lazy(() => import("./views/Pages/RegisterConfirm/RegisterConfirm"));
// const QRgenerator=React.lazy(() => import("./views/Pages/QRgenerator/QRgenerator"));


// const Sample=React.lazy(() => import("./views/Pages/Sample/Sample"));


// const PrivateRouteUser = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     //fakeAuth.isAuthenticated === true
//     localStorage.getItem("AccessToken")!==""
//       ? <Component {...props} />
//       : <Redirect to={{
//           pathname: '/#/login',
         
//         }} />
       
//   )} />
// )

class App extends Component {
  render() {
    return (
      <Router>
 
          <Switch>

             <Route
              exact
              path="/"
              name="Loader Page"
            component={Loaders}
           
            />

            <Route
              
              path="/main"
              name="Main Page"
                component={HomePage}
             
        
            />

                    <Route
              
              path="/register"
              name="Register Page"
              component={Register}
            />

            <Route
            
              path="/menu"
              name="Menu Page"
              component={Menupage}
             
            />

               <Route
              
              path="/regsiterconfirm"
              name="regsiter confirm"
               component={RegisterConfirm}
            
            />

       
             <Route component={HomePage} />

          {/* <Route
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
              path="/generator"
              name="QRgenerator"
              render={(props) => <QRgenerator {...props} />}
            />
            <Route
              exact
              path="/sample"
              name="Sample Page"
              render={(props) => <Sample {...props} />}
            />

<Route
              exact
              path="/main"
              name="Main Page"
              render={(props) => <HomePage {...props} />}
            />

            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />

            <Route
              path="/menu"
              name="Menu Page"
              render={(props) => <Menupage {...props} />}
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
              exact
              path="/regsiterconfirm"
              name="Page 500"
              render={(props) => <RegisterConfirm {...props} />}
            />


           
           

            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            /> */}
          </Switch>
  
      </Router>
    );
  }
}

export default App;
