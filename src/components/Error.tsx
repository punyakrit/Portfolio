// import React from 'react';
import { Link } from 'react-router-dom';
import errorGif from '../assets/gif.webp'; // Import your error GIF

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <img src={errorGif} alt="Error GIF" className="mb-8" />
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg mb-8">We're sorry, an error occurred while processing your request.</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">Go back to home</Link>
    </div>
  );
}

export default Error;
