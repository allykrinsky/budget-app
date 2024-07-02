import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Flex, Box, Button } from '@chakra-ui/react'

import TransactionsList from './TransactionTable.js';


const TabGroup = ({tabNames, onTabChange, onOpen, data, summary}) => {

  return (
    <Tabs onChange={(index) => onTabChange(index)}>
      <Flex justify="space-between" align="center" p={4}>
        <Box>
          <TabList>
            {tabNames.map((item) => (
              <Tab>{item.title}</Tab>
            ))}
          </TabList>
        </Box>
        <Box>
          <Button onClick={onOpen}>New Transaction</Button>
        </Box>
      </Flex>
      <TabPanels>
         <TabPanel>
          <Grid templateColumns='repeat(2, 1fr)' gap={16}>
            <TransactionsList data={data} />
            <TransactionsList data={summary} />
          </Grid>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabGroup;



