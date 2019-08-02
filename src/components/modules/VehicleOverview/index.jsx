import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import vehicleOverviewData from 'services/data/vehicleOverview.js';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';
import VehicleTypeList from './VehicleTypeList';

class VehicleOverview extends React.Component {
  render() {
    const { huubSpots } = vehicleOverviewData;
    const { match: { params } } = this.props;

    const huubSpot = huubSpots[params.huubSpot];
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
  }
}

VehicleOverview.propTypes = {
  match: PT.shape({
    params: PT.object,
  }),
};

export default withRouter(VehicleOverview);
