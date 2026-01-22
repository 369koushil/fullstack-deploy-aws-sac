import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";
const BASE_URL = BACKEND_API;
export const Update = () => {
  const username = useRef();
  const fName = useRef();
  const lName = useRef();
  const [state,setState]=useState();
  const navigate=useNavigate()

  const save=()=>{
    axios
    .put("/users/update",{
          username: username.current.value,
          fName: fName.current.value,
          lName: lName.current.value,
        },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
      
    )
    .then((res) => {console.log(res.data),setState(res.data) }).catch(err=>console.log(err))
    navigate("/profile")
  }
 

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
        {state?<Card msg={state}></Card>:null}
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold font-semibold text-xl mb-4">Profile</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold text-lg">First Name</label>
            <input
              type="text"
              name="firstName"
              className="p-2 border-2 border-green-500 rounded-md focus:outline-none"
              ref={fName}
              
            />
          </div>


          <div className="flex flex-col">
            <label className="font-semibold text-lg">Last Name</label>
            <input
              ref={lName}
              type="text"
              name="lastName"
              className="p-2 border-2 border-green-500 rounded-md focus:outline-none"
             
            />
          </div>


          <div className="flex flex-col">
            <label className="font-semibold text-lg">Username</label>
            <input
              type="text"
              name="username"
              className="p-2 border-2 border-green-500 rounded-md focus:outline-none"
             
              ref={username}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              onClick={save}
              className="bg-slate-800 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
