import { BottomWarning } from "../components/Warning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
 import { SubHeading } from "../components/SubHeading"
 import{useEffect, useRef} from "react"
 import axios from "axios"
import { useNavigate } from "react-router-dom"


export const Signup = () => {
  const navigate=useNavigate();
   const username=useRef();
   const password=useRef();
   const fName=useRef();
   const lName=useRef();

    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox reference={fName} placeholder="koushil" label={"First Name"} />
        <InputBox reference={lName} placeholder="Chilla" label={"Last Name"} />
        <InputBox reference={username} placeholder="koushil@gmail.com" label={"Email"} />
        <InputBox reference={password} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onPress={async ()=>{
          const response= await axios.post(`${BASE_URL}${"users/signup"}`,{
            username:username.current.value,
            password:password.current.value,
            fName:fName.current.value,
            lName:lName.current.value
           })
           if(response.status==201){
            localStorage.setItem("token","Bearer "+`${response.data.token}`)
            localStorage.setItem("fName",fName.current.value)
            localStorage.setItem("lName",lName.current.value)
            localStorage.setItem("username",username.current.value)
            navigate("/dashboard")
           }
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}