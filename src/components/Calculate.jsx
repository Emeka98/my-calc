"use client";
import React, { useState } from "react";

const Calculate = () => {
  const [results, SetResults] = useState("");
  const [input, SetInput] = useState("");
  const [pressed, SetPressed] = useState(false);

  const addToInput = (value) => {
    SetInput((prevInput) => prevInput + value);
  };

  const calculateResults = (input) => {
    try {
      const answer = eval(input);
      SetResults(answer);
    } catch (error) {
      return SetResults("Invalid operation");
    }
  };

  return (
    <section className="w-full rounded-xl p-1 xl:w-[45%] xl:mx-auto md:w-[60%] md:mx-auto lg:w-1/2 lg:mx-auto ">
      <div className="wrapper flex flex-col w-full rounded-xl gap-2">
        <div className="section-1  rounded-xl dark:bg-bg-dark bg-[#f4f6fa] flex flex-col gap-0">
          <div
            id="results"
            className="show-results font-bold text-[20px] w-full h-[30px] dark:bg-bg-dark bg-bg-milk px-1 justify-items-end text-right pr-2"
          >
            {results}
          </div>
          <div
            id="input"
            className="type-number font-bold text-[28px] w-full h-[40px] dark:bg-bg-dark bg-bg-milk px-1 justify-items-end text-right pr-2"
          >
            {input}
          </div>
        </div>
        <div className=" flex-col gap-2 rounded-xl section-2 w-full p-2 bg-dark-milk  dark:bg-bg-dark shadow-md mt-3 pt-4">
          <div className="col flex flex-row gap-3 justify-center w-full  mb-3">
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              7
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2  cursor-pointer rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              8
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              9
            </div>

            <div
              onClick={() => {
                SetInput((prevInput) => prevInput.slice(0, -1));
              }}
              className="hover:scale-110 hover:transition-all row  bg-dark-teal w-[20%] py-2.5  cursor-pointer rounded-md font-bold  text-[28px] text-bg-milk text-center"
            >
              DEL
            </div>
          </div>
          <div className="col flex flex-row gap-3 justify-center w-full mb-3">
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className=" row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              4
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              5
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              6
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              +
            </div>
          </div>
          <div className="col flex flex-row gap-3 justify-center w-full mb-3">
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              1
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              2
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              3
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              -
            </div>
          </div>
          <div className="col flex flex-row gap-3 justify-center w-full mb-3">
            <div
              onClick={(e) => {
                SetInput((prevInput) => {
                  if (prevInput === "") {
                    return "0" + e.target.textContent;
                  } else return prevInput + e.target.textContent;
                });
              }}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              .
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              0
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              /
            </div>
            <div
              onClick={(e) => addToInput(e.target.textContent)}
              className="hover:scale-110 hover:transition-all row w-[20%] py-2 cursor-pointer  rounded-md font-bold text-bg-navy text-[28px] bg-bg-milk text-center"
            >
              *
            </div>
          </div>
          <div className="col flex flex-row gap-3 justify-center w-full mb-3">
            <div
              onClick={() => {
                SetInput("");
                SetResults("");
              }}
              className="hover:scale-110 hover:transition-all row w-[45%] text-bg-milk bg-dark-teal py-2 cursor-pointer  rounded-md font-bold  text-[28px] text-center"
            >
              RESET
            </div>
            <div
              onClick={() => {
                calculateResults(input);
                SetPressed(true);
              }}
              className="hover:scale-110 hover:transition-all row w-[45%] text-bg-milk bg-light-brown py-2 cursor-pointer  rounded-md font-bold  text-[28px] text-center"
            >
              =
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculate;
