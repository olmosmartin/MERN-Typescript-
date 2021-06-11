import React, { useEffect, useState } from 'react';
import IVideo from "../../interface/video";
import * as videoServises from "./videoServises";
import VideoCard from "./VideoCard";
//import getVideos from "./videoServises"

const VideosLista = ()=> {
    const [videos, setVideos] = useState<IVideo[]>([])

    const cargarVideos=async()=>{
        const res= await videoServises.getVideos();
        /*const respuesta = await fetch("http://localhost:3000/videos");
        const data = await respuesta.json();
        //const res =await axios.get("http://localhost:3000/videos")/
        console.log(data);*/
        setVideos(res);
    }

    useEffect(() => {
        cargarVideos();
    }, [])

    return (
        <div>
            videos:
            {videos.map((video)=>{
                return <VideoCard video={video}/>
            })}
        </div>
    )
}

export default VideosLista;
