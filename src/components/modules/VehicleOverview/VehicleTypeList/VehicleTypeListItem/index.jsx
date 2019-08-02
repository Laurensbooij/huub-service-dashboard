import React from 'react';
import PT from 'prop-types';
import { withRouter } from 'react-router-dom';

import getVehicleIcon from 'services/getVehicleIcon';

import { ExtendedListItemContainer, Icon, ExtendedParagraph, StyledLink } from './styled';

const VehicleTypeListItem = ({ vehicleType, match: { params } }) => (
  <StyledLink to={`/${params.huubSpot}/voertuigen/${vehicleType}`}>
    <ExtendedListItemContainer>
      <Icon>{getVehicleIcon(vehicleType)}</Icon>
      <ExtendedParagraph>{vehicleType}</ExtendedParagraph>
    </ExtendedListItemContainer>
  </StyledLink>
);

VehicleTypeListItem.propTypes = {
  vehicleType: PT.string,
  match: PT.shape({
    params: PT.object,
  }),
};

export default withRouter(VehicleTypeListItem);
