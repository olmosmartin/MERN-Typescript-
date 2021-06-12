import React from 'react'
import IVideo from "../../interface/video";
import ReactPlayer from 'react-player';
import { useHistory } from "react-router-dom" // para cambiar de ruta
import * as videoServises from "./videoServises";
import './VideoCard.css'

interface Props {
    video: IVideo;
    recargarVideos: ()=>void;
}

export default function VideoCard({ video, recargarVideos }: Props) {//acá saqué video desde props.video
    const history = useHistory()

    const clickCard = ()=>{
        history.push(`/actualizar/${video._id}`);
    }

    const eliminar = async(e:any, id:string)=>{
        e.stopPropagation()//esto es para q el click del card no se active a la vez
        await videoServises.deleteVideo(id);
        recargarVideos();
    }

    return (

        //<div className="container p-2">
            //<div className="row">
                <div className="col-md-4">
                    <div className="card border-light mb-4 video-card" style={{cursor:'pointer', maxWidth: '20rem' }} onClick={clickCard}>
                        <div className="card-header">{video.titulo} <i className="fas fa-trash-alt d-flex justify-content-end" onClick={(e)=>video._id && eliminar(e,video._id)}></i> </div>
                        <div className="card-body">
                            <p className="card-text">{video.descripcion}</p>
                            <div className=""> 
                            <ReactPlayer url={video.url} 
                            className=""
                            width="100%"
                            height="100%"
                            controls={false}/>
                            </div>
                        </div>
                    </div>
                </div>
            //</div>
        //</div>

    )
}

