// import React, { useState } from "react";
// import axios from "axios"
// import {toast} from "react-toastify"

// const [uname,setUname] = useState("");
// const [pass,serPass] = useState("");

// const SignUP = ()=>{

//     const handler = async ()=>{
//         const res = await axios.post("http://localhost:3000/signup",{
//             name: uname,
//             pass: pass
//         });
 
//         if(res.data){
//             console.log("user signup");
//         }else{
//             console.error("please enter valid details");
//             toast("please enter valid details")
//         }
//     }
//     return(<div>
//         <form onSubmit={(e)=>{handler(e)}}>
//         <div>
//             <h1>Sign up</h1>
//         </div>
//         <div>
//             <h2>User-name</h2>
//             <div><input onChange={(e)=>{setUname(e.target.value)}} placeholder="enter username"/></div>
//         </div>
//         <div>
//             <h2>password</h2>
//             <div><input onChange={(e)=>{serPass(e.target.value)}} placeholder="enter password"/></div>
//         </div>
//         <div>
//             <h2>ReEnter password</h2>
//             <div><input placeholder="enter Repassword"/></div>
//         </div>
//         <div>
//             <button type="submit">Signup</button>
//         </div>
//         </form>
//     </div>)
// }

// export default SignUP;