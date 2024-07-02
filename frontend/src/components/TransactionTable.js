import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const TransactionsList = ( transactions ) => {

    const data = transactions.data;

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption placement='top'>Transactions</TableCaption>
                <Thead>
                        <Tr key="header">
                            {data.length > 0 && Object.keys(data[0]).filter((key) => key !== 'id').map((key) => 
                                <Th key={key}>{key}</Th>
                            )}
                        </Tr>
                </Thead>
                <Tbody>
                    {data.map((transaction) => (
                        <Tr key={transaction.id}>
                            {Object.keys(transaction).filter(key => key !== 'id').map((key) => (
                                <Td key={key}>{transaction[key]}</Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        )
      }

export default TransactionsList;