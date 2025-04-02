import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export const DashBord = ()=>{

    const [email,setEmail] = useState("");
    const [status,setStatus] = useState(false);
const Navigate = useNavigate();

    const handler = ()=>{
        axios.post("http:localhost:3000/api/v1/user/login",{
            email
        })
        Navigate("/videocall");
    }

    return(<div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="w-1/4 flex justify-around space-x-2">
            <div><input className="border-2 border-black" placeholder="Enter email id"/></div>
            <div className=" space-y-2">
                <div><button className="bg-black text-white w-40 rounded-md">Check friend's states</button></div>
                <div><button className="bg-black text-white w-30 rounded-md" onClick={handler}>Start video call</button></div>
            </div>
            <div>
                <div>
                    {status ? <p className="text-green-500">Online</p> : <p className="text-red-500">Offline</p>}
                </div>
            </div>
        </div>
    </div>)
}