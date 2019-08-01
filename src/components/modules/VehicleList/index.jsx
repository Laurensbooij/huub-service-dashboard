import React from 'react';

import HeaderBar from 'common/HeaderBar';
import PageContainer from 'common/PageContainer';

import VehicleListItem from './VehicleListItem';

const mockData = {
  huubSpot: {
    name: 'Schoonschip',
    city: 'Amsterdam',
    vehicleTypes: [
      {
        vehicleType: 'middenklasser',
        vehicles: [
          {
            vehicleId: 'ABC-1-A',
            mainBatteryPercentage: 91,
            lockBatteryPercentage: 53,
          },
          {
            vehicleId: 'AAC-2-B',
            mainBatteryPercentage: 64,
            lockBatteryPercentage: 97,
          },
          {
            vehicleId: 'ABB-1-C',
            mainBatteryPercentage: 65,
            lockBatteryPercentage: 73,
          },
          {
            vehicleId: 'BAB-3-C',
            mainBatteryPercentage: 20,
            lockBatteryPercentage: 46,
          },
          {
            vehicleId: 'CCA-2-A',
            mainBatteryPercentage: 87,
            lockBatteryPercentage: 20,
          },
        ],
      },
    ],
  },
};

class VehicleList extends React.Component {

  render() {
    const {
      huubSpot: {
        name,
        vehicleTypes,
      },
    } = mockData;

    return (
      <PageContainer>
        <HeaderBar
          to="/prev"
          title={vehicleTypes[0].vehicleType}
          subTitle={name}
        />
        {vehicleTypes[0].vehicles.map((vehicle) => (
          <VehicleListItem
            key={vehicle.vehicleId}
            vehicle={vehicle}
          />
        ))}
      </PageContainer>
    );
  }
}

export default VehicleList;
