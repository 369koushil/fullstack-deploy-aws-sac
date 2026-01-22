import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { Link } from "react-router-dom";


export function Dashboard() {
const [value,setValue]=useState();


  useEffect(()=>{
  axios.get(`/accounts/balance`,{
    headers:{
      authorization:`${localStorage.getItem("token")}`
    }
  }).then(response=>{
    setValue(response.data.crrbalance)
  })
  })
  return (
    <div>
     <Link to="/profile"> <Appbar logo={localStorage.getItem("fName")} /></Link>
      <div className="m-8">
        <Balance value={value} />
        <Users />
      </div>
    </div>
  );
}
