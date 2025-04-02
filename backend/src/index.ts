import express from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import { UserMenager } from "./manager/userManager"

const port = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"*"
    }
});

app.use(express.json());

const userManager = new UserMenager();

io.on('connection',(socket:Socket)=>{
    
})

server.listen(port,()=>{
    console.log("server is running on prot 3000");
})
