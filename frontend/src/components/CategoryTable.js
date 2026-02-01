import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const CategoryTable = ({ data }) => {

    // Handle null or undefined data
    if (!data || data.length === 0) {
        return (
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption placement='top'>Summary by Category</TableCaption>
                    <Thead>
                        <Tr key="header">
                            <Th>No data available</Th>
                        </Tr>
                    </Thead>
                </Table>
            </TableContainer>
        );
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption placement='top'>Summary by Category</TableCaption>
                <Thead>
                    <Tr key="header">
                        <Th>Category</Th>
                        <Th isNumeric>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((row, index) => (
                        <Tr key={index}>
                            <Td>{row.category}</Td>
                            <Td isNumeric>${row.total.toFixed(2)}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default CategoryTable;