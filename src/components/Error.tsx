// import React from 'react';
import { Link } from 'react-router-dom';
import errorGif from '../assets/gif.webp'; // Import your error GIF

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <img src={errorGif} alt="Error GIF" className="p-4" />
      <h1 className="md:text-4xl text-2xl font-bold">Oops! Something went wrong.</h1>
      <p className="md:text-lg text-sm">We're sorry, an error occurred while processing your request.</p>
      <Link to="/" className="px-4 py-2 bg-purple-500/40 text-white rounded hover:bg-purple-800/80 transition duration-300 relative mt-5">Go back to home</Link>
    </div>
  );
}

export default Error;
