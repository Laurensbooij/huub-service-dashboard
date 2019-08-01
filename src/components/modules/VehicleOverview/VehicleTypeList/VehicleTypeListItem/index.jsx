import React from 'react';
import PT from 'prop-types';

import getVehicleIcon from 'services/getVehicleIcon';

import { ExtendedListItemContainer, Icon, ExtendedParagraph } from './styled';

const VehicleTypeListItem = ({ vehicleType }) => (
  <ExtendedListItemContainer>
    <Icon>{getVehicleIcon(vehicleType)}</Icon>
    <ExtendedParagraph>{vehicleType}</ExtendedParagraph>
  </ExtendedListItemContainer>
);

VehicleTypeListItem.propTypes = {
  vehicleType: PT.string,
};

export default VehicleTypeListItem;
