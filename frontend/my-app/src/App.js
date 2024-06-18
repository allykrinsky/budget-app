
import React from 'react';
import TabGroup from './components/Tab';
import TransactionModal from './components/Modal';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ChakraProvider,
  Heading
} from '@chakra-ui/react'


import { Button, ButtonGroup } from '@chakra-ui/react'


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
      <TabGroup info={tabs}/>
      <Button onClick={onOpen}>New Transaction</Button>
     <TransactionModal isOpen={isOpen} onClose={onClose}/>
  </ChakraProvider>
  );
}

export default App;
