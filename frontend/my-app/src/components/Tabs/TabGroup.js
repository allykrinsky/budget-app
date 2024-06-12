import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import TabContent from './TabContent';

const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
`;

const TabGroup = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div>
        <TabContainer>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              isActive={index === activeTab}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </TabContainer>
        <TabContent>{tabs[activeTab].content}</TabContent>
      </div>
    );
  };
  
  export default TabGroup;