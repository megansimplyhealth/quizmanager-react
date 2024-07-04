
'use client'; // when client side use
import React, { useEffect, useState } from 'react';
import {Input, Button, CheckboxGroup, Checkbox} from '@nextui-org/react'
import axios, { AxiosError } from 'axios';



export default function Create() {
    const [questionText, setQuestionText] = useState('');
    const [answerOne, setAnswerOne] = useState('');
    const [answerTwo, setAnswerTwo] = useState('');
    const [answerThree, setAnswerThree] = useState('');
    const [answerFour, setAnswerFour] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [checkInvalid, setCheckInvalid] = useState(true);
    const [selectedCheckBox, setSelectedCheckBox] = useState<string[]>([]);

    const stopLoading = async () => {
        if (answerOne.length > 0 && answerTwo.length > 0 && answerThree.length > 0 && answerFour.length > 0 && questionText.length > 0 && correctAnswer !== 0) {
            setIsLoading(false);
          } else {
            setIsLoading(true);
        }
    };

    const questionChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        //alert("Works! " + event.target.value);
        setQuestionText(event.target.value);
        await stopLoading();
    };

    const answerOneChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerOne(event.target.value);
        await stopLoading();
    };

    const answerTwoChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerTwo(event.target.value);
        await stopLoading();
    };

    const answerThreeChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerThree(event.target.value);
        await stopLoading();
    };

    const answerFourChanged = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswerFour(event.target.value);
        await stopLoading();
    };

    const insertQuestion = async () => {
        if (isLoading === false) {

            const axios = require('axios');
        
            //alert("Question Added!" + " " + questionText + " " + answerOne + " " + answerTwo + " " + answerThree + " " + answerFour + " " + correctAnswer);

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5054/Questions',
            headers: {'Content-Type':'application/json','charset': 'utf-8'},
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
            console.log(AxiosError);
        });
        setQuestionText('Question');
        setQuestionText('');
        setAnswerOne('');
        setAnswerTwo('');
        setAnswerThree('');
        setAnswerFour('');
        setCorrectAnswer(0);
        setIsLoading(true);
        setCheckInvalid(true);
        setSelectedCheckBox([]);
        alert("Question Added! Please add more ot go back to play");
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
            placeholder="Question Text"
            value={questionText}
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
          label="Please Type Answer One"
          placeholder="Answer One"
          value={answerOne}
          onChange={answerOneChanged}
          className="w-1/2"
        />
        <Input
        isRequired
          key="answerTwo"
          type="text"
          color="danger"
          label="Please Type Answer Two"
          value={answerTwo}
          placeholder="Answer Two"
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
          label="Please Type Answer Three"
          value={answerThree}
          placeholder="Answer Three"
          onChange={answerThreeChanged}
          className="w-1/2"
        />
        <Input
        isRequired
          key="answerFour"
          type="text"
          color="secondary"
          label="Please Type Answer Four"
          value={answerFour}
          placeholder="Answer Four"
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
        value={selectedCheckBox}
        onValueChange={(value) => {
        setCheckInvalid(value.length !== 1);
        setCorrectAnswer(parseInt(value[0]));
        setSelectedCheckBox(value);
        stopLoading();
      }}
        >
        <Checkbox value="1" color="primary">Answer One</Checkbox>
        <Checkbox value="2" color="danger">Answer Two</Checkbox>
        <Checkbox value="3" color="warning">Answer Three</Checkbox>
        <Checkbox value="4" color="secondary">Answer Four</Checkbox>
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
