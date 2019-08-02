import React from 'react';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';
import VehicleTypeList from './VehicleTypeList';

const VehicleOverview = () => (
  <PageHeaderBarContainer
    to="/"
    title="Voertuigen"
    subTitle=""
  >
    <VehicleTypeList/>
  </PageHeaderBarContainer>
);

export default VehicleOverview;
