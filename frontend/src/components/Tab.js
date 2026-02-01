import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from '@chakra-ui/react'

import TransactionsList from './TransactionTable.js';
import CategoryTable from './CategoryTable.js';

const TabGroup = ({tabNames, onTabChange, data, summary}) => {

  return (
    <Tabs onChange={(index) => onTabChange(index)}>
      <TabList>
        {tabNames.map((item, index) => (
          <Tab key={index}>{item.title}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabNames.map((item, index) => (
          <TabPanel key={index}>
            <Grid templateColumns='repeat(2, 1fr)' gap={16}>
              <TransactionsList data={data} />
              <CategoryTable data={summary} />
            </Grid>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default TabGroup;



