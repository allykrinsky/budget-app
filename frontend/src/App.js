import { useState } from 'react';
import TabGroup from './components/Tab';
import TransactionModal from './components/Modal';
import useFetchData from './components/FetchData';

import {
  useDisclosure,
  ChakraProvider,
  Heading,
  Container,
  Flex,
  Button,
} from '@chakra-ui/react'

const tabs = [
  {
    title: 'January',
    month: 1,
  },
  {
    title: 'February',
    month: 2,
  },
  {
    title: 'March',
    month: 3,
  },
  {
    title: 'April',
    month: 4,
  },
  {
    title: 'May',
    month: 5,
  },
  {
    title: 'June',
    month: 6,
  },
  {
    title: 'July',
    month: 7,
  },
  {
    title: 'August',
    month: 8,
  },
  {
    title: 'September',
    month: 9,
  },
  {
    title: 'October',
    month: 10,
  },
  {
    title: 'November',
    month: 11,
  },
  {
    title: 'December',
    month: 12,
  },
];

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  const handleTransactionSuccess = () => {
    // Force refresh by changing the key
    setRefreshKey(prev => prev + 1);
  };

  const currentMonth = tabs[selectedTab].month;

  const transactionData = useFetchData(
    'http://127.0.0.1:8000/transactions/',
    currentMonth,
    refreshKey
  );
  const summaryData = useFetchData(
    'http://127.0.0.1:8000/transaction/summary',
    currentMonth,
    refreshKey
  );

  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={8} px={12}>
        <Flex justify="space-between" align="center" mb={6}>
          <Heading>Monthly Expenses</Heading>
          <Button colorScheme="blue" onClick={onOpen}>New Transaction</Button>
        </Flex>
        <TabGroup
          tabNames={tabs}
          data={transactionData.data}
          summary={summaryData.data}
          onTabChange={handleTabChange}
        />
        <TransactionModal
          isOpen={isOpen}
          onClose={onClose}
          onSuccess={handleTransactionSuccess}
        />
      </Container>
    </ChakraProvider>
  );
}

export default App;
