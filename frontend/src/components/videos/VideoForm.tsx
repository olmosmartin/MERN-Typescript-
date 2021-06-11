import React, { useState } from 'react'
import IVideo from "../../interface/video";
import * as videoServises from "./videoServises";


const VideoForm = () => {

    const [video, setVideo] = useState<IVideo>({ titulo: "", descripcion: "", url: "" })

    //React.ChangeEvent<HTMLInputElement> es el tipo de dato de onchange del input
    //React.ChangeEvent<HTMLTextAreaElement> es el titpo de dato del textarea
    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> )=>{
        setVideo({...video, [e.target.name]:e.target.value});
    }

    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const res = await videoServises.crearVideo(video);
        console.log(res);
    }

    return (
        <div className="container p-2">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card border-light mb-3" style={{ maxWidth: '20rem' }}>
                        <div className="card-header">Agregar video</div>
                        <div className="card-body">

                            <div className="form-group">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Titulo" name="titulo" onChange={handleInputChange} />
                                        <label htmlFor="floatingInput">Titulo</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="floatingInput2" placeholder="Descripcion" name="descripcion" onChange={handleInputChange} />
                                        <label htmlFor="floatingInput2">Descripcion</label>
                                    </div>
                                    <div className="form-floating  mb-3">
                                        <input type="text" className="form-control" id="floatingInput3" placeholder="URL" name="url" onChange={handleInputChange} />
                                        <label htmlFor="floatingInput3">URL</label>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-success" type="submit">Enviar</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoForm;
