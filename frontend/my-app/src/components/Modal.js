
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
              <Button onClick={onClose}>Submit</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }

export default TransactionModal;