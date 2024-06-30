
import React from 'react';
import TabGroup from './components/Tab';
import TransactionModal from './components/Modal';
import TransactionsList from './components/TransactionTable.js';
// import CategoryTable from './components/CategoryTable.js';
// import { DataContext } from '.components/TransactionData.js';

import {
  useDisclosure,
  ChakraProvider,
  Heading,
  Flex,
  Box,
  Grid
} from '@chakra-ui/react'


import { Button } from '@chakra-ui/react'
import CategoryTable from './components/CategoryTable.js';


const tabs = [
  {
    title: 'January',
    content: <div>This is the content i changed</div>,
  },
  {
    title: 'February',
    content: <div>This is the content for Tab 2</div>,
  },
  {
    title: 'March',
    content: <div>This is the content for Tab 3</div>,
  },
];


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider>
     <Heading>Monthly Expenses</Heading>
     <Flex justify="space-between" align="center" p={4}>
      <Box>
        <TabGroup info={tabs}/>
      </Box>
      <Box>
        <Button onClick={onOpen}>New Transaction</Button>
      </Box>
     </Flex>

      <Grid templateColumns='repeat(2, 1fr)' gap={16}>
        <TransactionsList />
        <CategoryTable />
      </Grid>


     <TransactionModal isOpen={isOpen} onClose={onClose}/>
     
     
  </ChakraProvider>
  );
}

export default App;
