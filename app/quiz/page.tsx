'use client'; // when client side use
import React, { useState } from 'react';
import axios from 'axios';

export default function Quiz() {

  type Question = {
    questionId: number;
    questionText: string;
    answerOne: string;
    answerTwo: string;
    answerThree: string;
    answerFour: string;
    correctAnswer: number;
  };

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState("Question Text");
  const [answers, setAnswers] = useState({
    answer1: "Answer One",
    answer2: "Answer Two",
    answer3: "Answer Three",
    answer4: "Answer Four"
  });
  const [correctAnswer, setCorrectAnswer] = useState(0);
  
  const axios = require('axios');

const updateQuestion = async (index: number) => {

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:5054/Questions',
    params: {
      questionId: index
    },
    headers: { 
    }
  };
  
  try{
    const response = await axios.request(config);
    const responseData = response.data[index];
    setQuestion(responseData.questionText);
      setAnswers({
        answer1: responseData.answerOne,
        answer2: responseData.answerTwo,
        answer3: responseData.answerThree,
        answer4: responseData.answerFour
      });
    setIndex(index + 1);
    setCorrectAnswer(responseData.correctAnswer);

    //alert("Works!: " + " " + questText + " " + answers.answer1 + " " + answers.answer2 + " " + answers.answer3 + " " + answers.answer4);

  } catch (error) {
    if (error == "TypeError: Cannot read properties of undefined (reading 'questionText')") {
      alert("No more questions 😒 Please Replay!");
      setIndex(0);
      return;
    } else {
    console.log(error);
    alert("Error fetching data: " + error);
    }
  }
};

const verifyAnswer = async (answer : number) => {
  if (answer == correctAnswer) {
    alert("Correct!");
    updateQuestion(index);
  } else if (answer == 0) {
    alert("ERROR HAS OCCURED");
  } else {
    alert("Incorrect!");
  }    
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex gap-2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Quiz Manager</h1>
      </div>

      <div className="flex gap-2">
      {index !== 0 && (
        <h2 className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">{question}</h2>
      )}
      </div>

      <div className="flex gap-2">
      {index == 0 && (
        <button className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-green-600 md:text-3xl lg:text-3xl dark:text-white" onClick={() => updateQuestion(index)}>START</button>
      )}
      </div>
      

      <div className="flex gap-10">
      {index !== 0 && (

      <><button onClick={() => verifyAnswer(1)} className="w-1/2 h-full py-10 px-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {answers.answer1}
          </button><button onClick={() => verifyAnswer(2)} className="w-1/2 h-full py-10 px-10 bg-transparent hover:bg-pink-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-pink-500 hover:border-transparent rounded">
              {answers.answer2}
            </button></>
      )}
      </div>

      <div className="flex gap-10">
      {index == 0 && (
      <a href='/leaderboard' className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-orange-600 md:text-3xl lg:text-3xl dark:text-white">LEADERBOARD</a>
      )}
      </div>

      <div className="flex gap-10">
      {index !== 0 && (
            <><button onClick={() => verifyAnswer(3)} className="w-1/2 h-full py-10 px-10 bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded">
            {answers.answer3}
          </button><button onClick={() => verifyAnswer(4)} className="w-1/2 h-full py-10 px-10 bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
              {answers.answer4}
            </button></>
      )}
      </div>

      <div className="flex gap-10">
      
      <a href='http://localhost:3000/' className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-red-600 md:text-3xl lg:text-3xl dark:text-white">BACK</a>
      
      </div>

      
    </main>
  );
}