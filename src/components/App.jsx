import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const VehicleOverview = lazy(() => import('modules/VehicleOverview'));
const VehicleList = lazy(() => import('modules/VehicleList'));

const App = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={VehicleOverview} exact />
      </Switch>
    </Suspense>
  </>
);

export default withRouter(App);
