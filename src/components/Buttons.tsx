// import React from "react";
import { FaDownload } from "react-icons/fa";
import resumee from "../assets/Resume.pdf";
import { useNavigate } from "react-router-dom";

function Buttons() {
    const Navigate = useNavigate()
  return (
    <div className="flex justify-around w-2/3 mt-10">
      <div className="py-4 px-4 rounded-full border-4 bg-gray-800 border-white shadow-white shadow-md relative">
        <button onClick={() => Navigate("/project")}>View Projects</button>
      </div>
      <div className="py-4 px-4 rounded-full border-4 bg-gray-800 border-white shadow-white shadow-md relative">
        <a href={resumee} target="_blank" rel="noopener noreferrer">
          <button
            className="flex items-center"
            onClick={() => {
              console.log("Button clicked");
            }}
          >
            <FaDownload className="mr-3" />
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default Buttons;
