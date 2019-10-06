import React from 'react';
import PT from 'prop-types';

import HuubSpotListItem from './HuubSpotListItem';

const HuubSpotList = ({ huubSpotData }) => (
  <>
    {huubSpotData.map((huubSpot) => (
      <HuubSpotListItem
        key={huubSpot.slug}
        huubSpotTitle={huubSpot.title}
        huubSpotCity={huubSpot.city}
        huubSpotSlug={huubSpot.slug}
      />
    ))}
  </>
);

HuubSpotList.propTypes = {
  huubSpotData: PT.array,
};

export default HuubSpotList;
