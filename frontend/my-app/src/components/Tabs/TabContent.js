// src/components/TabContent.js
import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  padding: 16px;
  background: #fff;
`;

const TabContent = ({ children }) => {
  return <Content>{children}</Content>;
};

export default TabContent;
