'use client'

import {useEffect, useState} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { Table } from '../components/Table';
import { LinePlot } from '../components/Graph'; 

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json');
      const {bpi} = await response.json();
      const dataArray = [];
      for (const [key, value] of Object.entries(bpi)) {
          dataArray.push({date: key, value});
      }
      setData(dataArray);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
   <main id="app">
       {
           loading ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
           ) : (
            <div>
               <Table data={data} />
               <LinePlot data={data} />
            </div>
           )
       }
   </main>
  );
}
