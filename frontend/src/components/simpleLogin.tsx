import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const SimpleLogin = ()=>{

const [email,setEmail] = useState("");
const Navigate = useNavigate();

    const handler = ()=>{
        axios.post("http:localhost:3000/api/v1/user/login",{
            email
        })
        Navigate("/");
    }

    return(<div className=" w-screen h-screen flex items-center justify-center">
        <div className="flex justify-center w-60 h-50 bg-amber-300 rounded-2xl">
            <div>
                <div className="my-5 w-full flex flex-col items-center font-bold text-2xl"><p>Login</p></div>
                <div className="space-y-4">
                    <div>
                        <input className="border-2 " placeholder="example@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    {/* <div>
                        <input className="border-2" type="password" placeholder="password"/>
                    </div> */}
                    <div className="flex flex-col items-center ">
                        <button className="bg-black text-white rounded-md w-15" onClick={handler}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}