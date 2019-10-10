import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const HuubSpotOverview = lazy(() => import('modules/HuubSpotOverview'));
const VehicleList = lazy(() => import('modules/VehicleList'));
const VehicleOverview = lazy(() => import('modules/VehicleOverview'));
const VehicleDetail = lazy(() => import('modules/VehicleDetail'));

const App = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" component={HuubSpotOverview} exact />
        <Route path="/:huubSpot/voertuigen" component={VehicleOverview} exact />
        <Route path="/:huubSpot/voertuigen/:vehicleType" component={VehicleList} exact />
        <Route path="/:huubSpot/voertuigen/:vehicleType/:vehicleSlug" component={VehicleDetail} exact />
      </Switch>
    </Suspense>
  </>
);

export default withRouter(App);
