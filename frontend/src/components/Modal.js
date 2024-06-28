
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
    Button
  } from '@chakra-ui/react'


const categories = [
    'Rent', 'Groceries', 'Dining', 'Shopping'
]


const handleTransaction = async () => {
  try {
    const response = await fetch('http://localhost:8000/transactions', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const TransactionModal = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Stack spacing={3}>
                <Input placeholder='Name' size='md' />
                <Input placeholder='$ Amount' size='md' />
                {/* <Select placeholder='medium size' size='md' /> */}
                <Select placeholder='Category' size='md'>
                    {categories.map((item) => (
                        <option value='option1'>{item}</option>
                    ))}
                </Select>
            </Stack>
            </ModalBody>
            <ModalFooter>
              <Button onClick={handleTransaction}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }

export default TransactionModal;