// import React from 'react';
import { useNavigate } from "react-router-dom";
import errorGif from "../assets/gif.webp"; // Import your error GIF
import { useEffect, useState } from "react";

function Error() {
  const [time, setTime] = useState(8);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const Navigate = useNavigate();

  useEffect(() => {
    if (time == 0) {
      Navigate("/");
    }
  }, [time, Navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <img src={errorGif} alt="Error GIF" className="p-4" />
      <h1 className="md:text-4xl text-2xl font-bold">
        Oops! Something went wrong.
      </h1>
      <p className="md:text-lg text-sm">
        You will be redirected to home page in{" "}
        <span className="font-bold">{time}</span> Seconds
      </p>
    </div>
  );
}

export default Error;
