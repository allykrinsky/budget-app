import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
// import { useData } from './TransactionData';
import axios from 'axios';

// const DataContext = createContext();

const TransactionsList = ( month ) => {
    const [transactions, setTransactions] = useState([]);
    const [refetch, setRefetch] = useState(false);


    useEffect(() => {
      fetchTransactions();
    }, []);

    const fetchTransactions = () => {
      axios.get('http://127.0.0.1:8000/transactions/', {
        params: {
            month: month.month,
        }})
      .then(response => {
        console.log(response.data)
        setTransactions(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });

  };

    // const fetchTransactions = async () => {
    //   try {
    //     const response = await fetch('http://127.0.0.1:8000/transactions/', {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error('Failed to fetch transactions');
    //     }
    //     const data = await response.json();
    //     setTransactions(data);
    //   } catch (error) {
    //     console.error('Error fetching transactions:', error.message);
    //   }
        
    //   }

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption placement='top'>Transactions</TableCaption>
                <Thead>
                        <Tr key="header">
                            {transactions.length > 0 && Object.keys(transactions[0]).filter((key) => key !== 'id').map((key) => 
                                <Th key={key}>{key}</Th>
                            )}
                        </Tr>
                </Thead>
                <Tbody>
                    {transactions.map((transaction) => (
                        <Tr key={transaction.id}>
                            {Object.keys(transaction).filter(key => key !== 'id').map((key) => (
                                <Td key={key}>{transaction[key]}</Td>
                            ))}
                        </Tr>
                    ))};
                </Tbody>
            </Table>
            </TableContainer>
        )
      }

export default TransactionsList;