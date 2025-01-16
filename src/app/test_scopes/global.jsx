"use client";
import React, { useEffect, useState } from "react";
import Tests_english from "../../../tests/english/english.json";
import Tests_I_T from "../../../tests/it/IT.json";
import Tests_I_q from "../../../tests/iq/IQ.json";
import Tests_math from "../../../tests/math/Math.json";
import Tests_russian from "../../../tests/russian/Russian.json";
import { Button } from "@mui/material";

export default function General_test(currentTest) {
  const test_type = currentTest.target.split("/");

  const file_system = {
    1: Tests_english,
    2: Tests_math,
    3: Tests_russian,
    4: Tests_I_q,
    5: Tests_I_T,
  };
  const displayable_test = useState(file_system[test_type[0]]);

  console.log(displayable_test[0].test);
  const [isDisabled, setIsDisabled] = useState(false);
  const [test_index, setIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(1);
  const [counts,setCounts]=useState(0)
  const [incorrects,setIncorrects]=useState(0)

  const handleSelectAnswer = (e, inTimeTest) => {
    setIsDisabled(true);
    const userAns=e.target.value
    const realAns=inTimeTest.answer
    if(userAns==realAns){
      setIsCorrect(2)
      setCounts((prev)=>prev+1)
    }else{
      setIsCorrect(3)
      setIncorrects(prev=>prev+1)
    }

  };

  const handleNext = () => {
    test_index < 30 ? setIndex(test_index + 1) : alert("End of the test");
    setIsDisabled(false);
    setIsCorrect(1);
  };

  return (
    <section
      id="test_section"
      className="w-screen h-screen fixed z-50 top-0 left-0 bg-gradient-to-bl from-fuchsia-900 to-blue-600 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-white mb-6">Welcome to Test Section!</h1>
      <div className="test_container bg-opacity-80 bg-blue-700 rounded-lg shadow-lg w-4/5 p-8 flex flex-col items-center">
      <div className="flex w-2/5 items-center justify-around">  
      <button
        
        className={`w-12 h-12 mb-6 rounded-full text-white font-bold ${
          isCorrect === 1
            ? "bg-orange-500"
            : isCorrect === 2
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      >
        !
      </button>
      <button
      
      className={`w-12 h-12 mb-6 rounded-full text-white font-bold bg-green-500`}
    >
      {counts}
    </button>
    <button
      
      className={`w-12 h-12 mb-6 rounded-full text-white font-bold bg-red-500`}
    >
      {incorrects}
    </button>
    </div>
        {displayable_test[0].test.map((inTimeTest, index) => (
          <div
            className={`w-full ${index !== test_index ? "hidden" : ""}`}
            key={index}
            id={`${index}_test`}
          >
            <h1 className="text-xl text-black bg-gray-300 rounded-full py-2 px-4 text-center mb-4">
              Question {inTimeTest.id + 1}
            </h1>
            <h2 className="text-lg text-white mb-6">{inTimeTest.question}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {inTimeTest.options.map((option, idx) => (
                <button
                  key={idx}
                  className="w-40 h-10 bg-orange-500 text-black font-semibold rounded-md hover:bg-orange-600 transition-all disabled:bg-gray-400"
                  onClick={(e) => handleSelectAnswer(e, inTimeTest)}
                  disabled={isDisabled}
                  value={option}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="contained"
        disabled={test_index === 30}
        color="success"
        className="mt-6"
        onClick={() => handleNext()}
      >
        Next
      </Button>
    </section>
  );
}
