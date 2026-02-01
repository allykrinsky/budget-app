import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const TransactionsList = ({ data }) => {

    // Handle null or undefined data
    if (!data || data.length === 0) {
        return (
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption placement='top'>Transactions</TableCaption>
                    <Thead>
                        <Tr key="header">
                            <Th>No data available</Th>
                        </Tr>
                    </Thead>
                </Table>
            </TableContainer>
        );
    }

    // Format date to be more readable
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption placement='top'>Transactions</TableCaption>
                <Thead>
                    <Tr key="header">
                        <Th>Date</Th>
                        <Th>Item</Th>
                        <Th>Category</Th>
                        <Th isNumeric>Amount</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((transaction) => (
                        <Tr key={transaction.id}>
                            <Td>{formatDate(transaction.date)}</Td>
                            <Td>{transaction.item}</Td>
                            <Td>{transaction.category}</Td>
                            <Td isNumeric>${transaction.amount.toFixed(2)}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TransactionsList;