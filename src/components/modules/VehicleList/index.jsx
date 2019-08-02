import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import vehicleData from 'services/data/vehicles';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';

import VehicleListItem from './VehicleListItem';

class VehicleList extends React.Component {

  render() {
    const { match: { params } } = this.props;
    const huubSpotName = vehicleData[params.huubSpot].huubSpotName;
    const vehicleList = vehicleData[params.huubSpot].vehicles[params.vehicleType];

    return (
      <PageHeaderBarContainer
        to={`/${params.huubSpot}/voertuigen/`}
        title={params.vehicleType}
        subTitle={huubSpotName}
      >
        {vehicleList.map((vehicle) => (
          <VehicleListItem
            key={vehicle.vehicleId}
            vehicle={vehicle}
          />
        ))}
      </PageHeaderBarContainer>
    );
  }
}

VehicleList.propTypes = {
  match: PT.shape({
    params: PT.object,
  }),
};

export default withRouter(VehicleList);
