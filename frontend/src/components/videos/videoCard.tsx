import React from 'react'
import IVideo from "../../interface/video";

interface Props {
    video: IVideo
}

/*<div>
            <h1>{video.titulo}</h1>
            <p>{video.descripcion}</p>
        </div>*/

export default function VideoCard({ video }: Props) {
    return (

        <div className="container p-2">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card border-light mb-3" style={{ maxWidth: '20rem' }}>
                        <div className="card-header">{video.titulo}</div>
                        <div className="card-body">
                            <p className="card-text">{video.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

