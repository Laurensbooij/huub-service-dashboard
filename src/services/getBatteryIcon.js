import React, { lazy } from 'react';
import PT from 'prop-types';

const MainBatteryEmptySvg = lazy(() => import('app/static/vectors/batteries/main-battery-empty.svg'));
const MainBatteryHalfSvg = lazy(() => import('app/static/vectors/batteries/main-battery-half.svg'));
const MainBatteryFullSvg = lazy(() => import('app/static/vectors/batteries/main-battery-full.svg'));
const LockBatteryEmptySvg = lazy(() => import('app/static/vectors/batteries/lock-battery-empty.svg'));
const LockBatteryHalfSvg = lazy(() => import('app/static/vectors/batteries/lock-battery-half.svg'));
const LockBatteryFullSvg = lazy(() => import('app/static/vectors/batteries/lock-battery-full.svg'));

const getBatteryIcon = (batteryType, batteryPercentage) => {
  if (batteryType === 'main') {
    if (batteryPercentage >= 90) {
      return <MainBatteryFullSvg />;
    }
    if (batteryPercentage < 90 && batteryPercentage > 30) {
      return <MainBatteryHalfSvg />;
    }
    if (batteryPercentage < 30) {
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
