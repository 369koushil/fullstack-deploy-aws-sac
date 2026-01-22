import { BottomWarning } from "../components/Warning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import{useRef} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
  const navigate=useNavigate();
  const username=useRef();
  const password=useRef();


    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox reference={username} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox reference={password} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} onPress={async()=>{ 
            const response = await axios.post(
              `/users/signin`,
              {
                username: username.current.value,
                password: password.current.value,
              }
            );
            if(response.status==202){
              localStorage.setItem("token","Bearer "+response.data.token)
              localStorage.setItem("fName",response.data.user.fName)
              localStorage.setItem("lName",response.data.user.lName)
              localStorage.setItem("username",response.data.user.username)
              navigate("/dashboard")
             }
   console.log(response.status)
          }} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}