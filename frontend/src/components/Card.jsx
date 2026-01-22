import React from "react";
import { Link } from "react-router-dom";

export function Card({ msg }) {
  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50">
      <div className="bg-white border border-gray-300 shadow-lg rounded-lg w-80 p-4">
      
        <div className="bg-green-500 w-full h-10 rounded-t-md flex justify-center items-center">
          <h2 className="text-white text-lg font-semibold">Notification</h2>
        </div>
        
  
        <div className="flex flex-col items-center gap-y-4 p-4 text-center">
          <p className="font-semibold text-gray-800 text-lg">{msg}</p>
          
     
          <Link
            to="/dashboard"
            className="flex items-center gap-x-2 text-indigo-700 font-medium hover:text-indigo-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Go back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
