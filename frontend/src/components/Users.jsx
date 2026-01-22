import { useEffect, useState } from "react"
import { Button } from "./Button"
import axios from "axios"
import {useNavigate} from "react-router-dom"
const BASE_URL = BACKEND_API; 

export const Users = () => {
    
   const  [search,setSearch]=useState("")
    const [users, setUsers] = useState([]);
    useEffect(()=>{
axios.get(`${BASE_URL}/users/bulk?filter=${search}`,{
  headers:{
    authorization:`${localStorage.getItem("token")}`
  }
}).then(res=>{
  setUsers(res.data.usersModif)
})
},[search])
    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" onChange={e=>{
              setSearch(e.target.value)
            }} placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    const navigate=useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.fName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.fName} {user.lName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onPress={()=>{
                navigate("/sendmoney?to="+`${user._id}`+"&name="+`${user.fName}`)
            }} label={"Send Money"} />
        </div>
    </div>
}