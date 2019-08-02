import React from 'react';
import PT from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';

import vehicleOverviewData from 'services/data/vehicleOverview.js';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';
import VehicleTypeList from './VehicleTypeList';

const VehicleOverview = ({ match: { params } }) => {
  const { huubSpots } = vehicleOverviewData;
  const huubSpot = huubSpots[params.huubSpot];

  if (!huubSpot) {
    return <Redirect to="/" />;
  }

  const { huubSpotName, vehicleTypes } = huubSpot;

  return (
    <PageHeaderBarContainer
      to="/"
      title="Voertuigen"
      subTitle={huubSpotName}
    >
      <VehicleTypeList vehicleTypes={vehicleTypes}/>
    </PageHeaderBarContainer>
  );
};

VehicleOverview.propTypes = {
  match: PT.shape({
    params: PT.object.isRequired,
  }),
};

export default withRouter(VehicleOverview);
