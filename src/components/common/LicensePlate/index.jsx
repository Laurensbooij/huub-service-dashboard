import React from 'react';
import PT from 'prop-types';

const LicensePlate = ({ vehicleLicense, className }) => (
  <svg className={className} width="97" height="24" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <rect stroke="#0B0C1E" fill="#F1F254" x=".5" y=".5" width="96" height="23" rx="3"/>
      <path d="M3 1h11v22H3c-1.1045695 0-2-.8954305-2-2V3c0-1.1045695.8954305-2 2-2z" fill="#5498F2"/>
      <text fontFamily="ProximaNova-Semibold, Proxima Nova" fontSize="16" fontWeight="500" fill="#0B0C1E">
        <tspan x="22" y="18">{vehicleLicense}</tspan>
      </text>
      <path d="M7.245 21H6.68l-1.74-2.385V21h-.585v-3.335h.6l1.705 2.31v-2.31h.585V21zm2.725 0H7.915v-3.335H8.5v2.82h1.47V21z" fill="#FFF" fillRule="nonzero"/>
      <g transform="translate(4 7)" fill="#F1F254">
        <circle cx="6.5" cy="3.5" r="1"/>
        <circle cx="5.5" cy="1.5" r="1"/>
        <circle cx="3.5" cy=".5" r="1"/>
        <circle cx="1.5" cy="1.5" r="1"/>
        <circle cx=".5" cy="3.5" r="1"/>
        <circle cx="1.5" cy="5.5" r="1"/>
        <circle cx="3.5" cy="6.5" r="1"/>
        <circle cx="5.5" cy="5.5" r="1"/>
      </g>
    </g>
  </svg>
);

LicensePlate.propTypes = {
  vehicleLicense: PT.string,
  className: PT.string,
};

export default LicensePlate;
