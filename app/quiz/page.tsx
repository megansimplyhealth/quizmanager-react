import React from "react";
import AnswerButton from "@/app/components/AnswerButton"

export default function Quiz() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex gap-2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Quiz Manager</h1>
      </div>

      <div className="flex gap-2">
        <h2 className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">Placeholder for Questions</h2>
      </div>

      <div className="flex gap-10">

      {/* <AnswerButton /> */}

      <button className="py-10 px-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Answer One
            </button>
            <button className="py-10 px-10 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
            Answer Two
            </button>
      </div>

      <div className="flex gap-10">
            <button className="py-10 px-10 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
            Answer Three 
            </button>
            <button className="py-10 px-10 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
            Answer Four 
            </button>
      </div>

      
    </main>
  );
}