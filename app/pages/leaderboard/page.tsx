'use client'; // when client side use
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


export default function Quiz() {

  const [index, setIndex] = useState(1);
  const [rows, setRows] = useState([
    {
      key: 0,
      name: "Baz",
      date: "1/7/2024",
      time: "15:00",
      score: 1,
    },
  ]);

  const updateLeaderboard = async () => {
    const config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: '/api/response',
      headers: {},
    };
    //alert("Works!");
    try{
      const response = await axios.request(config);
      console.log(response.data);   
      console.log(response.data.length);   
        for(let i = 0; i <= response.data.length; i++) {
          let responseFormat = {
            key : index,
            name: response.data[i].responseName,
            date: response.data[i].responseDate,
            time: response.data[i].responseTime,
            score: response.data[i].responseScore
          }
          setIndex(index + 1);
          setRows(rows => [...rows, responseFormat]);
          console.log(responseFormat);
        }        
      //alert("Works!: " + responseFormat);
    } catch (error) {
      console.log(error);
      //alert("Error fetching data: " + error);
    }
  };

  const count = useRef(0);
  useEffect(() => {
    if (count.current !== 0) {
      updateLeaderboard();
    }
    count.current++;
  }, []);
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "date",
      label: "DATE",
    },
    {
      key: "time",
      label: "TIME",
    },
    {
      key: "score",
      label: "SCORE",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex gap-2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Quiz Manager</h1>
      </div>

      <div className="flex gap-2">

      <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      
      </div>

      <div className="flex gap-10">
      
      <a href='/pages/quiz' className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-red-600 md:text-3xl lg:text-3xl dark:text-white">BACK</a>
      
      </div>

      
    </main>
  );
}