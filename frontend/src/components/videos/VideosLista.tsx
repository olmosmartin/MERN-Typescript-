import React, { useEffect, useState } from 'react';
import IVideo from "../../interface/video";
import * as videoServises from "./videoServises";
import VideoCard from "./VideoCard";

const VideosLista = ()=> {
    const [videos, setVideos] = useState<IVideo[]>([])

    const cargarVideos=async()=>{
        const res= await videoServises.getVideos();
        setVideos(res);
    }

    useEffect(() => {
        cargarVideos();
    }, [])

    return (
        <div className="container p-2">
            <div className="row">
                {videos.map((video)=>{
                    return <VideoCard video={video}/>
                })}
            </div>
        </div>
    )
}

export default VideosLista;
