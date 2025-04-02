
import { useState } from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import SignUP from '../components/signup'; 
// import LogIn from '../components/login';
import VideoCall from './components/videoCall';
import { SimpleLogin } from './components/simpleLogin';
import { DashBord } from './components/dashbord';

function App() {
  const websocket = new WebSocket("ws://localhost:3000/ws");


  // to be shore that connection is astablished and send message
  websocket.onopen = (event)=>{
    console.log("connected");
  

    const msg = {
      type:"message",
      text:"good morning"
    }
    websocket.send(JSON.stringify(msg));

  }


  //receving message from server
  websocket.onmessage = ((event)=>{
    const mm = JSON.parse(event.data);
    console.log(mm);
  })

  const [auth,setAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/videocall' element={<VideoCall/>}/>
        <Route path='/login' element={<SimpleLogin/>}/>
        <Route path="/" element={<DashBord />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
