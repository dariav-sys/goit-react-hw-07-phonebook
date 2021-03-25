import React, { Component, Suspense, lazy } from 'react';
import AppBar from './components/AppBar/AppBar';
import { Switch } from 'react-router-dom';
import { getCurrentUser } from './redux/auth';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./views/Homepage/Homepage.js'));
const Contacts = lazy(() => import('./views/Contacts/Contacts.js'));
const Register = lazy(() => import('./views/Register/Register.js'));
const Login = lazy(() => import('./views/Login/Login.js'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PrivateRoute
              path="/contacts"
              component={Contacts}
              redirectTo="/login"
            />
            <PublicRoute
              path="/register"
              restricted
              component={Register}
              redirectTo="/contacts"
            />
            <PublicRoute
              path="/login"
              restricted
              component={Login}
              redirectTo="/contacts"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
