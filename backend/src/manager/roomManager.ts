import { User } from "./userManager";

interface Room{
    user1:User;
    user2:User;
}

let global_room_id = 1;

export class RoomManger{

    private room:Map<string,Room>

    constructor(){
        this.room = new Map<string,Room>();
    }

    createRoom(user1:User,user2:User){
        const roomId = this.genrate().toString();
        this.room.set(roomId.toString(),{
            user1,
            user2
        })

        user1.socket.emit("send-offer",{
            roomId
        })

        user2.socket.emit("send-offer",{
            roomId
        })
    }

    onOffer(roomId:string,sdp:string,senderSocketId:string){

        const room = this.room.get(roomId);
        
        if(!room){
            return;
        }

        const receivingUser = room.user1.socket.id === senderSocketId ? room.user2 : room.user1;
        receivingUser?.socket.emit("offer",{
            sdp,
            roomId
        })
    }

    onAnswer(roomId:string,sdp:string,senderSocketId:string){
        
        const room = this.room.get(roomId);
        
        if(!room){
            return;
        }

        const receivingUser = room.user1.socket.id === senderSocketId ? room.user2 : room.user1;
        receivingUser?.socket.emit("answer",{
            sdp,
            roomId
        })
    }

    onIceCandidates(roomId:string,senderSocketId:string,candidate:any,type:"sender" | "receiver"){
        const room = this.room.get(roomId);
        if(!room){
            return;
        }
        const recevingUser = room.user1.socket.id === senderSocketId ? room.user2: room.user1;
        recevingUser.socket.emit("add-ice-candidate",({candidate,type}));
    }


    genrate(){
        global_room_id++;
        return global_room_id;
    }
    
}