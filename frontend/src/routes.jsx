import React, { useContext } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { AuthContext } from './context/auth';
import login from './view/login';
import cadastro from './view/cadastro';
import shop from './view/shop';
import checkout from './view/checkout';

const Routes = () => {
  const [auth] = useContext(AuthContext);

  const isLogin = () => {
    return auth;
  };

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin() ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/shop" exact component={shop} />
        <Route path="/checkout" exact component={checkout} />
        <Route path="/" exact component={login} />
        <Route path="/cadastro" exact component={cadastro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
