import { Socket } from "socket.io"
import { RoomManger } from "./roomManager";

export interface User {
        email:string,
        socket:Socket
}

export class UserMenager{

    private users:User[];
    private roomManager : RoomManger;

    constructor(){
        this.users = [];
        this.roomManager = new RoomManger();
    }

    addUser(email:string,socket:Socket){
        this.users.push({
                email,
                socket
        })
    }

    userState(user1:string,user2:string){

        if(!user1 || !user2){
            return;
        }

        const u1 = this.users.find(X => X.email == user1);
        const u2 = this.users.find(x => x.email == user2);

        if(!u1 || !u2){
            return;
        }

        const room = this.roomManager.createRoom(u1,u2);
    }


    inithandlers(socket:Socket){
        socket.on("offer",({sdp,roomId}:{sdp:string,roomId:string})=>{
            this.roomManager.onOffer(roomId,sdp,socket.id);
        })

        socket.on("answer",({sdp,roomId}:{sdp:string,roomId:string})=>{
            this.roomManager.onAnswer(roomId,sdp,socket.id)
        })

        socket.on("add-ice-candidate",({candidate,roomId,type})=>{
            this.roomManager.onIceCandidates(roomId,socket.id,candidate,type);
        });
    }

}

