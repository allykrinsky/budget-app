// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const DataContext = createContext();

// export const DataProvider = async ({ children }) => {
//   const [data, setData] = useState([]);


// //   const fetchData = () => {
// //     axios.get('http://127.0.0.1:8000/transactions/')
// //       .then(response => {
// //         setData(response.data);
// //       })
// //       .catch(error => {
// //         console.error("There was an error fetching the data!", error);
// //       });

// //       console.log("got the data")
// //   };

//   try {
//     const fetchData = await fetch('http://127.0.0.1:8000/transactions/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!fetchData.ok) {
//       throw new Error('Failed to fetch transactions');
//     }
//     // const data = await response.json();
//     setData(data);
//   } catch (error) {
//     console.error('Error fetching transactions:', error.message);
//   }

// //   useEffect(() => {
// //     fetchData();
// //   }, []);

//   return (
//     <DataContext.Provider value={{ data, fetchData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);
