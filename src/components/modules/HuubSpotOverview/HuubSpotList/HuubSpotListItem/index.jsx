import React from 'react';
import PT from 'prop-types';

import ListItemContainer from 'common/ListItemContainer';

import { HuubSpotTitle, HuubSpotCity } from './styled';

const HuubSpotListItem = ({ huubSpotTitle, huubSpotCity, huubSpotSlug }) => (
  <ListItemContainer toPath={`/${huubSpotSlug}/voertuigen`}>
    <HuubSpotTitle>{huubSpotTitle}</HuubSpotTitle>
    <HuubSpotCity>{huubSpotCity}</HuubSpotCity>
  </ListItemContainer>
);

HuubSpotListItem.propTypes = {
  huubSpotTitle: PT.string.isRequired,
  huubSpotCity: PT.string.isRequired,
  huubSpotSlug: PT.string.isRequired,
};

export default HuubSpotListItem;
