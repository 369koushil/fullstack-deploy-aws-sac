import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_URL = BACKEND_API;

export const StartPage = () => {
  const navigate = useNavigate();


  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token){
      axios.get("users/info",{
        headers:{
          authorization:token
        }
      }).then(res=>{
        if(res.data.code==200)navigate("/dashboard")
         
      })
    }
    
  },[])
  return (
    <div className="h-screen bg-slate-100 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">Welcome to FinPay</h1>
        <p className="text-gray-500">Your trusted partner in digital payments</p>
      </div>

      <div className="space-y-4 w-1/2 max-w-sm">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>
        <button
          onClick={() => navigate("/signin")}
          className="w-full bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

