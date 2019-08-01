import React from 'react';
import styled from 'styled-components';
import PT from 'prop-types';

import HeaderBar from './HeaderBar';

const PageContainer = styled.main`
  margin-top: 60px;
`;

const PageHeaderBarContainer = ({ to, title, subTitle, children }) => (
  <PageContainer>
    <HeaderBar
      to={to}
      title={title}
      subTitle={subTitle}
    />
    {children}
  </PageContainer>
);

PageHeaderBarContainer.propTypes = {
  to: PT.string.isRequired,
  title: PT.string.isRequired,
  subTitle: PT.string.isRequired,
  children: PT.object,
};

export default PageHeaderBarContainer;
