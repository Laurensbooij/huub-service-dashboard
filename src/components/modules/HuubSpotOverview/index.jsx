import React from 'react';

import huubSpotOverviewData from 'services/data/huubSpotOverview.js';

import PageHeaderBarContainer from 'common/PageHeaderBarContainer';

import HuubSpotList from './HuubSpotList';

const HuubSpotOverview = () => {
  const { huubSpots } = huubSpotOverviewData;

  return (
    <PageHeaderBarContainer
      title="HUUB-spots"
    >
      <HuubSpotList huubSpotData={huubSpots} />
    </PageHeaderBarContainer>
  );
};

export default HuubSpotOverview;
