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
    useToast,
  } from '@chakra-ui/react'

import { FormControl, FormLabel, Container, Box } from '@chakra-ui/react';
import { useState } from 'react';

const TransactionForm = ({ onClose, onSuccess }) => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const date = new Date().toISOString();

    try {
      const response = await fetch('http://127.0.0.1:8000/transactions/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
          item,
          amount: parseFloat(amount),
          category
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create transaction');
      }

      toast({
        title: 'Transaction created',
        description: 'Your transaction has been added successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      // Reset form
      setItem('');
      setAmount('');
      setCategory('');

      // Call success callback to refresh data
      if (onSuccess) {
        onSuccess();
      }

      // Close modal
      onClose();
    } catch (error) {
      console.error('Error creating transaction:', error);
      toast({
        title: 'Error',
        description: 'Failed to create transaction. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
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
          <FormControl id="item" mb={4} isRequired>
            <FormLabel>Item</FormLabel>
            <Input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              placeholder="Enter item name"
              isDisabled={isSubmitting}
            />
          </FormControl>
          <FormControl id="amount" mb={4} isRequired>
            <FormLabel>Amount</FormLabel>
            <Input
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              isDisabled={isSubmitting}
            />
          </FormControl>
          <FormControl id="category" mb={4} isRequired>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter category"
              isDisabled={isSubmitting}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            type="submit"
            width="full"
            isLoading={isSubmitting}
          >
            Add Transaction
          </Button>
        </form>
      </Box>
    </Container>
  );
};

const TransactionModal = ({ isOpen, onClose, onSuccess }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TransactionForm onClose={onClose} onSuccess={onSuccess} />
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  };

export default TransactionModal;