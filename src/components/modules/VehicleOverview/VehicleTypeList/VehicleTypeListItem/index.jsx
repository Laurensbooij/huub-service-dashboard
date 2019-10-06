import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import getVehicleIcon from 'services/getVehicleIcon';

import { ExtendedListItemContainer, Icon, ExtendedParagraph } from './styled';

const VehicleTypeListItem = ({ vehicleType, match: { params } }) => (
  <ExtendedListItemContainer toPath={`/${params.huubSpot}/voertuigen/${vehicleType}`}>
    <Icon>{getVehicleIcon(vehicleType)}</Icon>
    <ExtendedParagraph>{vehicleType}</ExtendedParagraph>
  </ExtendedListItemContainer>
);

VehicleTypeListItem.propTypes = {
  vehicleType: PT.string,
  match: PT.shape({
    params: PT.object,
  }),
};

export default withRouter(VehicleTypeListItem);
