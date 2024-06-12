// src/components/Tab.js
import React from 'react';
import styled from 'styled-components';

const TabButton = styled.button`
  padding: 16px;
  cursor: pointer;
  background: #FFFFFF;
  border: none;
  border-bottom: ${props => (props.isActive ? '2px solid #000000' : '2px solid transparent')};
  outline: none;
  &:hover {
    background: #F5F5F5;
  }
`;

const Tab = ({ title, isActive, onClick }) => {
  return <TabButton isActive={isActive} onClick={onClick}>{title}</TabButton>;
};

export default Tab;
