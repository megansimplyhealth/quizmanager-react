'use client'; // when client side use
// import React, { useState } from 'react';
// import axios from 'axios';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

export default function Quiz() {

  const rows = [ //to get from api dynamically
    {
      key: "1",
      name: "Megan",
      date: "01/01/2000",
      time: "16:00",
      score: 10,
    },
    {
      key: "2",
      name: "Barry",
      date: "01/01/2024",
      time: "12:00",
      score: 15,
    },
    {
      key: "3",
      name: "Baz",
      date: "01/07/2024",
      time: "15:00",
      score: 1,
    },
  ];
  
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
      
      <a href='/quiz' className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-red-600 md:text-3xl lg:text-3xl dark:text-white">BACK</a>
      
      </div>

      
    </main>
  );
}