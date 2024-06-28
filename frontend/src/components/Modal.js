
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Stack,
    Select,
    Button,
  } from '@chakra-ui/react'

import { FormControl, FormLabel, Container, Box } from '@chakra-ui/react';
import { useState } from 'react';


const categories = [
    'Rent', 'Groceries', 'Dining', 'Shopping'
]


// const handleTransaction = async (item, amount, category) => {
//   try {
//     const response = await fetch('http://127.0.0.1:8000/transactions/', {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         item, amount, category
//       }),
//     });
//     console.log(JSON.stringify({
//       item, amount, category
//     }))
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };


const TransactionForm = () => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here
    console.log('Submitted Item:', item);
    console.log('Submitted Amount:', amount);
    console.log('Submitted Description:', category);
    // Optionally, clear input fields after submission
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
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

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
  }

export default TransactionModal;