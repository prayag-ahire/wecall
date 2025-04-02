// import React, { useState } from "react";
// import axios from "axios"

// const [uname,setUname] = useState("");
// const [pass,serPass] = useState("");

// const LogIn = ()=>{

//     const handler = async (e)=>{
//         const res = await axios.post("http://localhost:3000/login",{
//             name: uname,
//             pass: pass
//         });
 
//         if(res.data){
//             console.log("user login");
//         }else{
//             console.error("please enter valid details");
//             alert("please enter valid details");
//         }
//     }
//     return(<div>
//         <form onSubmit={(e)=>{handler(e)}}>
//         <div>
//             <h1>Login</h1>
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
//             <button type="submit">Login</button>
//         </div>
//         </form>
//     </div>)
// }

// export default LogIn;