import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";



const CategoryTable = () => {
    const [summary, setSummary] = useState([]);
  
    useEffect(() => {
      const fetchTransactions = async () => {
        try {
          const response = await fetch('http://127.0.0.1:8000/transaction/summary', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error('Failed to fetch transactions');
          }
  
          const data = await response.json();
          setSummary(data);
          console.log(data)
        } catch (error) {
          console.error('Error fetching transactions:', error.message);
        }
      };
  
      fetchTransactions();
    }, []);


    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption placement='top'>Summary</TableCaption>
                <Thead>
                        <Tr key="header">
                            <Th>Category</Th>
                            <Th>Total</Th>
                        </Tr>
                </Thead>
                <Tbody>
                    {summary.map((row) => (
                        <Tr>
                            <Td>{row.category}</Td>
                            <Td>{row.total}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        )
    };

export default CategoryTable;