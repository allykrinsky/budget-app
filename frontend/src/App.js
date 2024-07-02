
import React, { useEffect, useState } from 'react';
import TabGroup from './components/Tab';
import TransactionModal from './components/Modal';
import useFetchData from './components/FetchData';

import {
  useDisclosure,
  ChakraProvider,
  Heading,
} from '@chakra-ui/react'


const tabs = [
  {
    title: 'January',
  },
  {
    title: 'February',
  },
  {
    title: 'March',
  },
];


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(); //modal states

  const [selectedTab, setSelectedTab] = useState(0);
  // const [transactionData, setTransactionData] = useState(useFetchData('http://127.0.0.1:8000/transactions/', selectedTab));
  // const [summaryDataData, setSummaryData] = useState(useFetchData('http://127.0.0.1:8000/transactions/', selectedTab));

  const handleTabChange = (index) => {
    setSelectedTab(index);
    console.log(selectedTab);
  };

  const transactionData = useFetchData('http://127.0.0.1:8000/transactions/', selectedTab);
  const summaryData = useFetchData('http://127.0.0.1:8000/transaction/summary', selectedTab);


  console.log("transactionData", transactionData.data);
  console.log("summary", summaryData.data);


  return (
    <ChakraProvider>
     <Heading>Monthly Expenses</Heading>
     <TabGroup tabNames={tabs} data={transactionData.data} summary={summaryData.data} onTabChange={handleTabChange} onOpen={onOpen}/>
     <TransactionModal isOpen={isOpen} onClose={onClose}/> 
  </ChakraProvider>
  );
}

export default App;
