import React, { useEffect, useRef, useState } from "react"

export const VideoCall = ()=>{
    const [localname,setLocalName] = useState("");
    const [remotename,setremotename] = useState("");
    const localVideoRef = useRef<HTMLVideoElement | null>(null);
    const remoteVideoRef = useRef<HTMLVideoElement | null>(null);
    const [localAudioTrack,setLocalAudioTrack] = useState<MediaStreamTrack | null>(null);
    const [localVideoTrack,setLocalVideoTrack] = useState<MediaStreamTrack | null>(null);
    const [videos,setVideo] = useState(true);
    const [audios,setAudio] = useState(true);

    const getMedia = async()=>{


        const stream = await window.navigator.mediaDevices.getUserMedia({video:true,audio:false});
        
        const AudioTrack = stream.getAudioTracks()[0];
        const VideoTrack = stream.getVideoTracks()[0];

        setLocalAudioTrack(AudioTrack);
        setLocalVideoTrack(VideoTrack);

        if(!localVideoRef.current){
            return;
        }
        
        localVideoRef.current.srcObject = new MediaStream([VideoTrack]);
        localVideoRef.current.play();
        
    }

    useEffect(()=>{
        if(localVideoRef && localVideoRef.current){
            getMedia();
        }
    },[localVideoRef]);

    return(<div>
        <div className="h-screen w-screen">
            <div className=" flex flex-row ">
                <div className="w-1/2 border-2 flex flex-col items-center justify-center">
                    <h1 className="text-2xl">{localname}</h1>
                    <video className="w-full" ref={localVideoRef}/>
                </div >
                <div className="w-1/2 border-2 flex flex-col items-center justify-center">
                <h1 className="text-2xl">{remotename}</h1>
                    <video ref={remoteVideoRef}/>
                </div>
            </div>
            <div>
                <div className="w-full flex flex-col items-center h-full justify-center mt-20 ">
                <div className="flex justify-around w-1/2 bg-slate-300 border-2 rounded-2xl h-10 items-center">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                    </div>
                    <div>
                        {audios ? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg> : <div></div>}
                    </div>
                    <div>
                       {videos ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>:<div></div>}
                    </div> 
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>

                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>)
}


export default VideoCall
