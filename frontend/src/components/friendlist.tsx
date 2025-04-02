// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const [list,setList] = useState([]); 
// const friendList = ()=>{

//     const handler =async ()=>{
//         const res = await axios.get("http://localhost:3000/friend-list");
//         const token = await res.data;

//         setList(token);
//     }

//     useEffect(()=>{
//         handler();
//     },[]);
//     return(
//         <div>
//             <div>Friend-list</div>
//             <ul>
//                 {list.map((name,index)=>(
//                     <li>
//                         <div><image/></div>
//                         <div><p>{name}</p></div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default friendList;