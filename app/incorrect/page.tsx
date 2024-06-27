import React from "react";

export default function Correct() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex gap-2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">That was Incorrect</h1>
      </div>


      <div className="flex gap-10">
      <button className="py-10 px-10 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            Back
            </button>
            <button className="py-10 px-10 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            Next
            </button>
      </div>

      
    </main>
  );
}