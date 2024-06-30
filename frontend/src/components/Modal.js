import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Button,
  } from '@chakra-ui/react'

import { FormControl, FormLabel, Container, Box } from '@chakra-ui/react';
import { useState } from 'react';

// import { useData } from './TransactionData';

import axios from 'axios';

const TransactionForm = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  // const { fetchData } = useData();

  const handleSubmit = (event) => {
    event.preventDefault();

    setItem('');
    setAmount('');
    setCategory('');
  };

  const handleTransaction = async (item, amount, category) => {

    const date = new Date();
    try {
      const response = await fetch('http://127.0.0.1:8000/transactions/', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date, item, amount, category
        }),
      });
      console.log(JSON.stringify({
        date, item, amount, category
      }))
      // fetchData();
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

//   const handleTransaction = async (item, amount, category) => {
//     const date = new Date();

//     const data = JSON.stringify({
//       date, item, amount, category
//     })

//     console.log(data);

//     await axios.post('http://127.0.0.1:8000/transactions/', data)
//     .then(response => {
//       console.log('done')
//       // fetchData();
//     }).catch(error => {
//       console.log(data)
//       console.error("There was an error posting the data!", error);
//     });
// };

  return (
    <Container maxW="sm">
      <Box p={4}>
        <form onSubmit={handleSubmit}>
          <FormControl id="item" mb={4}>
              <FormLabel>Item</FormLabel>
              <Input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter Item"
                required
              />
            </FormControl>
          <FormControl id="amount" mb={4}>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </FormControl>
          <FormControl id="category" mb={4}>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter description"
              required
            />
          </FormControl>
          <Button colorScheme="blue" onClick={() => handleTransaction(item, amount, category)} type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

const TransactionModal = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <TransactionForm />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  };

export default TransactionModal;