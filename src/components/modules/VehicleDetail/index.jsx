import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import vehicleData from 'services/data/vehicles';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';
import VehicleTypeTitle from './VehicleTypeTitle';
import VehicleBatteriesStatus from './VehicleBatteriesStatus';
import { VehicleName, ExtendedLicensePlate } from './styled';

const VehicleDetail = ({ match: { url, params } }) => {
  const huubSpotName = vehicleData[params.huubSpot].huubSpotName;
  const vehicle = vehicleData[params.huubSpot].vehicles[params.vehicleType].find((element) => element.vehicleId === params.vehicleSlug);

  /* generate path that can be used to navigate to previous page */
  const indexOfLastSlash = url.lastIndexOf('/');
  const previousPageUrl = url.slice(0, indexOfLastSlash);

  return (
    <PageHeaderBarContainer
      to={previousPageUrl}
      title="Voertuig"
      subTitle={huubSpotName}
    >
      <VehicleTypeTitle vehicleType={params.vehicleType}/>
      {params.vehicleType === 'middenklasser' ?
        <ExtendedLicensePlate vehicleLicense={vehicle.vehicleId}/>
        :
        <VehicleName>{vehicle.vehicleId}</VehicleName>}
      <VehicleBatteriesStatus
        mainBatteryPercentage={vehicle.mainBatteryPercentage}
        lockBatteryPercentage={vehicle.lockBatteryPercentage}
      />
    </PageHeaderBarContainer>
  );
};

VehicleDetail.propTypes = {
  match: PT.shape({
    url: PT.string.isRequired,
    params: PT.object.isRequired,
  }),
};

export default withRouter(VehicleDetail);
