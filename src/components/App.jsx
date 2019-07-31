import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const VehicleList = lazy(() => import('modules/VehicleList'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={VehicleList} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
