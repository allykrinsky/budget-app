import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import axios from 'axios';


const CategoryTable = (month) => {
    const [summary, setSummary] = useState([]);

    useEffect(() => {
      fetchTransactions();
    }, []);

    const fetchTransactions = () => {
      axios.get('http://127.0.0.1:8000/transaction/summary', {
        params: {
            month: month.month,
        }})
      .then(response => {
        console.log(response.data)
        setSummary(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
    }

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