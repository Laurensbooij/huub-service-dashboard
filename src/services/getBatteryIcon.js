import React from 'react';
import PT from 'prop-types';

import MainBatteryEmptySvg from 'app/static/vectors/batteries/main-battery-empty.svg';
import MainBatteryHalfSvg from 'app/static/vectors/batteries/main-battery-half.svg';
import MainBatteryFullSvg from 'app/static/vectors/batteries/main-battery-full.svg';
import LockBatteryEmptySvg from 'app/static/vectors/batteries/lock-battery-empty.svg';
import LockBatteryHalfSvg from 'app/static/vectors/batteries/lock-battery-half.svg';
import LockBatteryFullSvg from 'app/static/vectors/batteries/lock-battery-full.svg';

const getBatteryIcon = (batteryType, batteryPercentage) => {
  if (batteryType === 'main') {
    if (batteryPercentage >= 90) {
      return <MainBatteryFullSvg />;
    }
    if (batteryPercentage < 90 && batteryPercentage > 30) {
      return <MainBatteryHalfSvg />;
    }
    if (batteryPercentage <= 30) {
      return <MainBatteryEmptySvg />;
    }
  }

  if (batteryType === 'lock') {
    if (batteryPercentage >= 90) {
      return <LockBatteryFullSvg />;
    }
    if (batteryPercentage < 90 && batteryPercentage > 30) {
      return <LockBatteryHalfSvg />;
    }
    if (batteryPercentage <= 30) {
      return <LockBatteryEmptySvg />;
    }
  }
};

getBatteryIcon.propTypes = {
  batteryType: PT.string,

};

export default getBatteryIcon;
