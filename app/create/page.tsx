
'use client'; // when client side use
import React, { useEffect, useState } from 'react';
import {Input, Button, CheckboxGroup, Checkbox} from '@nextui-org/react'
import axios from 'axios';



export default function Create() {
    const [questionText, setQuestionText] = useState('Question');
    const [answerOne, setAnswerOne] = useState('Answer One');
    const [answerTwo, setAnswerTwo] = useState('Answer Two');
    const [answerThree, setAnswerThree] = useState('Answer Three');
    const [answerFour, setAnswerFour] = useState('Answer Four');
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [checkInvalid, setCheckInvalid] = useState(true);

    const stopLoading = () => {
        if (answerOne !== 'Answer One' && answerTwo !== 'Answer Two' && answerThree !== 'Answer Three' && answerFour !== 'Answer Four' && answerOne.length > 0 && answerTwo.length > 0 && answerThree.length > 0 && answerFour.length > 0 && questionText.length > 0 && questionText !== 'Question') {
            setIsLoading(false);
          } else {
            setIsLoading(true);
        }
    };

    const questionChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        //alert("Works! " + event.target.value);
        setQuestionText(event.target.value);
        stopLoading();
    };

    const answerOneChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerOne(event.target.value);
        stopLoading();
    };

    const answerTwoChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerTwo(event.target.value);
        stopLoading();
    };

    const answerThreeChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerThree(event.target.value);
        stopLoading();
    };

    const answerFourChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerFour(event.target.value);
        stopLoading();
    };

    const insertQuestion = async () => {
        if (isLoading === false && correctAnswer !== 0) {

            const axios = require('axios');
        
            //alert("Question Added!" + " " + questionText + " " + answerOne + " " + answerTwo + " " + answerThree + " " + answerFour + " " + correctAnswer);

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5054/Questions',
            headers: { },
            data : JSON.stringify({
                questionText: questionText,
                answerOne: answerOne,
                answerTwo: answerTwo,
                answerThree: answerThree,
                answerFour: answerFour,
                correctAnswer: correctAnswer
            })
          };
          
        axios.request(config)
        .then(() => {
            console.log(JSON.stringify({
                    questionText: questionText,
                    answerOne: answerOne,
                    answerTwo: answerTwo,
                    answerThree: answerThree,
                    answerFour: answerFour,
                    correctAnswer: correctAnswer
                }));
        })
        .catch((error: any) => {
            console.log(error);
        });

        } else {
            alert("Please Fill Out All Fields!");
        }
        
    };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="flex gap-2">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Quiz Manager</h1>
      </div>

      <div className="flex gap-2">
        <Input
            isRequired
            key="questionText"
            type="text"
            label="Please Type Your Question"
            placeholder={questionText}
            onChange={questionChanged}
            className="w-[434px]"
            />
        </div>

        <div className="flex gap-2">

        <Input
        isRequired
          key="answerOne"
          type="text"
          color="primary"
          label="Please Type Your Answer"
          placeholder={answerOne}
          onChange={answerOneChanged}
          className="w-1/2"
        />
        <Input
        isRequired
          key="answerTwo"
          type="text"
          color="danger"
          label="Please Type Your Answer"
          placeholder={answerTwo}
          onChange={answerTwoChanged}
          className="w-1/2"
        />

        </div>

<div className="flex gap-2">

        <Input
        isRequired
          key="answerThree"
          type="text"
          color="warning"
          label="Please Type Your Answer"
          placeholder={answerThree}
          onChange={answerThreeChanged}
          className="w-1/2"
        />
        <Input
        isRequired
          key="answerFour"
          type="text"
          color="secondary"
          label="Please Type Your Answer"
          placeholder={answerFour}
          onChange={answerFourChanged}
          className="w-1/2"
        />

      </div>

      <div className="flex gap-2">
        <CheckboxGroup
        key="correctAnswer"
        description = "Only select the one correct answer"
        orientation="horizontal"
        color="success"
        isInvalid={checkInvalid}
        label="Please select which answer is correct"
        onValueChange={(value) => {
        setCheckInvalid(value.length !== 1);
        setCorrectAnswer(parseInt(value[0]));
        stopLoading();
      }}
        >
        <Checkbox value="1">Answer One</Checkbox>
        <Checkbox value="2">Answer Two</Checkbox>
        <Checkbox value="3">Answer Three</Checkbox>
        <Checkbox value="4">Answer Four</Checkbox>
        </CheckboxGroup>
      </div>

      <div className="flex gap-2">
      <Button
        key="submit"
        isLoading={isLoading}
        onClick={() => insertQuestion()}
        className="w-48 h-full py-10 px-10 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
      >
        SUBMIT
      </Button>

      </div>

      <a href='http://localhost:3000/' className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-red-600 md:text-3xl lg:text-3xl dark:text-white">BACK</a>
    </main>
  );
}
