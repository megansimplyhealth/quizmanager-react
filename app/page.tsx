'use client'; // when client side use
import React, { useState } from 'react';


const test = require('dotenv').config()
console.log(test)




export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex gap-2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Quiz Manager</h1>
      </div>

      <div className="flex gap-10">
      <a href="/quiz" className="py-10 px-10 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            Play Questions
          </a>
      </div>

      <div className="flex gap-10">
      <a href="/create" className="py-10 px-10 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
            Create Questions
          </a>
      </div>
        
    </main>
  );
}
