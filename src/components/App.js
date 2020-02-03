import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

// pages
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Campaigns from '../pages/Campaigns/Campaigns';
import Orders from '../pages/Orders/Orders';
import Performance from '../pages/Performance/Performance';
import Help from '../pages/Help/Help';

// assets
import appLogo from '../assets/img/logo.svg';
// configs
import routes from '../configs/routes';

// styles
import './App.scss';

const App = () => (
  <div>
    <Header />

    <Switch>
      <Route exact path={routes.MAIN} component={Main} />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.PRODUCTS} component={Products} />
      <Route exact path={routes.CAMPAIGNS} component={Campaigns} />
      <Route exact path={routes.ORDERS} component={Orders} />
      <Route exact path={routes.PERFORMANCE} component={Performance} />
      <Route exact path={routes.HELP} component={Help} />

      <Redirect to="/" />
    </Switch>

    <Footer image={appLogo} />
  </div>
);

export default App;
