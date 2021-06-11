import React from 'react'
import IVideo from "../../interface/video";
import ReactPlayer from 'react-player'

interface Props {
    video: IVideo
}

export default function VideoCard({ video }: Props) {
    return (

        //<div className="container p-2">
            //<div className="row">
                <div className="col-md-4">
                    <div className="card border-light mb-4" style={{ maxWidth: '20rem' }}>
                        <div className="card-header">{video.titulo} <i className="fas fa-edit"></i> <i className="fas fa-trash-alt"></i> </div>
                        <div className="card-body">
                            <p className="card-text">{video.descripcion}</p>
                            <div className=""> 
                            <ReactPlayer url={video.url} 
                            className=""
                            playing
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

