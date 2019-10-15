import React from 'react';
import PT from 'prop-types';
import { withRouter, Redirect } from 'react-router-dom';

import vehicleData from 'services/data/vehicles';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';

import VehicleListLabels from './VehicleListLabels';
import VehicleListItem from './VehicleListItem';

const VehicleList = ({ match: { params } }) => {
  const huubSpot = vehicleData[params.huubSpot];

  if (!huubSpot) {
    return <Redirect to="/" />;
  }

  const huubSpotName = huubSpot.huubSpotName;
  const vehicleList = huubSpot.vehicles[params.vehicleType];

  return (
    <PageHeaderBarContainer
      to={`/${params.huubSpot}/voertuigen/`}
      title={params.vehicleType}
      subTitle={huubSpotName}
    >
      <VehicleListLabels/>
      {vehicleList.map((vehicle) => (
        <VehicleListItem
          key={vehicle.vehicleId}
          vehicle={vehicle}
          vehicleType={params.vehicleType}
        />
      ))}
    </PageHeaderBarContainer>
  );
};

VehicleList.propTypes = {
  match: PT.shape({
    params: PT.object.isRequired,
  }),
};

export default withRouter(VehicleList);
