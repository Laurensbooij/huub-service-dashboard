import React from 'react';
import styled from 'styled-components';

import HuubLogoSvg from 'app/static/vectors/huub-logo.svg';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 60px;
`;

const StyledHuubLogo = styled(HuubLogoSvg)`
  margin: 0 26px 0 0;
`;

const HuubLogo = () => (
  <Container>
    <StyledHuubLogo/>
  </Container>
);

export default HuubLogo;
