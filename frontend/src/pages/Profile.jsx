import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';

export const Profile = () => {

  const navigate = useNavigate();
  const [state, setState] = useState({
    username: localStorage.getItem("username"),
    fName: localStorage.getItem("fName"),
    lName: localStorage.getItem("lName")
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get(`/users/info`, {
          headers: {
            authorization: localStorage.getItem("token")
          }
        });
        console.log(res.data);
        setState(res.data.user);
      } catch (error) {
        console.error("Error fetching user info:", error);
        
      }
      localStorage.setItem("username",res.data.user.username)
      localStorage.setItem("fName",res.data.user.fName)
      localStorage.setItem("lName",res.data.user.lName)
    };
    fetchUserInfo();
  }, []);

  const handleSignOut = () => {
    console.log("User signed out!");
    localStorage.clear();
    navigate("/signup");
  };

  return (
    
    <div className="min-h-screen bg-slate-300 flex justify-center items-center">
    <Link to="/dashboard" className='w-12 h-12 flex justify-center items-center fixed top-4 left-4 bg-white text-semibold  rounded-full z-1'>
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
    </Link>
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Profile</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-green-700 text-lg">First Name</label>
            <p className="font-semibold">{state.fName}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-green-700 text-lg">Last Name</label>
            <p className="font-semibold">{state.lName}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-green-700 text-lg">Username</label>
            <p className="font-semibold">{state.username}</p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => navigate("/update")}
              className="bg-gray-800 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
            >
              Update
            </button>
            <button
              onClick={handleSignOut}
              className="bg-gray-800 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
