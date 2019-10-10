import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import vehicleData from 'services/data/vehicles';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';
import VehicleTypeTitle from './VehicleTypeTitle';
import { VehicleName, ExtendedLicensePlate } from './styled';

const VehicleDetail = ({ match: { params } }) => {
  const huubSpotName = vehicleData[params.huubSpot].huubSpotName;
  const vehicle = vehicleData[params.huubSpot].vehicles[params.vehicleType].find((element) => element.vehicleId === params.vehicleSlug);

  return (
    <PageHeaderBarContainer
      to="/"
      title="Voertuig"
      subTitle={huubSpotName}
    >
      <VehicleTypeTitle vehicleType={params.vehicleType}/>
      {params.vehicleType === 'middenklasser' ?
        <ExtendedLicensePlate vehicleLicense={vehicle.vehicleId}/>
        :
        <VehicleName>{vehicle.vehicleId}</VehicleName>}
    </PageHeaderBarContainer>
  );
};

VehicleDetail.propTypes = {
  match: PT.shape({
    params: PT.object.isRequired,
  }),
};

export default withRouter(VehicleDetail);
