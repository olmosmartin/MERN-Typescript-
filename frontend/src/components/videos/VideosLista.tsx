import React, { useEffect, useState } from 'react';
import IVideo from "../../interface/video";
import * as videoServises from "./videoServises";
import VideoCard from "./VideoCard";

const VideosLista = ()=> {
    const [videos, setVideos] = useState<IVideo[]>([])

    const cargarVideos=async()=>{
        const res= await videoServises.getVideos();

/*
        const videosOrdenados = res.data.map(video=>{
            return{
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt):new Date(),
                updateAt: video.updateAt ? new Date(video.updateAt):new Date(),
            }
        }).sort((a,b)=>b.createdAt.getTime() - a.createdAt.getTime());

        setVideos(videosOrdenados);
        */

        //los odenos por fecha de actualizados
        const videosOrdenados = res.map((video)=>{
            return{
                ...video,
                //createdAt: video.createdAt ? new Date(video.createdAt):new Date(),
                updateAt: video.updateAt ? new Date(video.updateAt):new Date()
            }
        }).sort((a,b)=>b.updateAt.getTime() - a.updateAt.getTime());

        setVideos(videosOrdenados);

    }

    useEffect(() => {
        cargarVideos();
    }, [])

    return (
        <div className="container p-2">
            <div className="row">
                {videos.map((video)=>{
                    return <VideoCard video={video} key={video._id} recargarVideos={cargarVideos}/>
                })}
            </div>
        </div>
    )
}

export default VideosLista;
