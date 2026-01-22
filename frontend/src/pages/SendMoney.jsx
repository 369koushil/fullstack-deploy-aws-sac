import { useNavigate, useSearchParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Spinner } from "../components/Spinner";
import { Card } from "../components/Card";
import axios from "axios";

export const SendMoney = () => {
    const [spin, setSpin] = useState(false);
    const [resmsg, setResmsg] = useState(null);
    const amount = useRef();
    const [params] = useSearchParams();
    const name = params.get("name");
    const to = params.get("to");

    function transfer() {
        setSpin(true);
        const money = amount.current.value;

        console.log("Name:", name);
        console.log("Recipient ID:", to);
        console.log("Transfer Amount:", money);

        // Send Axios request using .then()
       setTimeout(()=>{
        axios.put(
            `/accounts/transfer`,
            {
                amount: money,
                to: to
            },
            {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            }
        )
        .then((response) => {
            console.log("Response Data:", response.data);
            setSpin(false);
            setResmsg(response.data.msg); // Update the state
        })
        .catch((error) => {
            console.error("Transfer Request Failed:", error);
            setSpin(false);
            setResmsg("Transfer failed. Please try again.");
        });
       },2000)
    }

    return (
        <div className="flex justify-center h-screen bg-gray-100">
            {spin ? <Spinner /> : null}
            {resmsg ? <Card msg={resmsg}  /> : null}
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                <span className="text-2xl text-white">
                                    {name.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <h3 className="text-2xl font-semibold">To {name}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    ref={amount}
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    id="amount"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <button
                                onClick={transfer}
                                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                            >
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
