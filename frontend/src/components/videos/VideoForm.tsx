import React, { useState, useEffect } from 'react'
import IVideo from "../../interface/video";
import * as videoServises from "./videoServises";
import { toast } from 'react-toastify';
import { useHistory, useParams } from "react-router-dom" // para cambiar de ruta


const estadoInicialVacio = {
        titulo: "",
        descripcion: "",
        url: ""
        }

    interface Params {
        id: string;
    }

    const VideoForm = () => {
        const history = useHistory()
        const params = useParams<Params>()//en params voy a tener lo q me llegó de card 
        const [video, setVideo] = useState<IVideo>(estadoInicialVacio)

        //React.ChangeEvent<HTMLInputElement> es el tipo de dato de onchange del input
        //React.ChangeEvent<HTMLTextAreaElement> es el titpo de dato del textarea
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
            setVideo({ ...video, [e.target.name]: e.target.value });
        }

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if(!params.id){//si no llega nada en params es porque estoy en crear
                await videoServises.crearVideo(video);
                toast.success("nuevo video agregado");//envia el mensaje de toast toastify
                setVideo(estadoInicialVacio); //vacia los input
            }else{
                videoServises.actualizarVideo(params.id, video);
                toast.success("video actualizado");//envia el mensaje de toast toastify
                //setVideo(estadoInicialVacio); //vacia los input
            }
            

            history.push("/videos");//lleva al inicio
        }

        const getVideoID = async(id:string)=>{
            const res = await videoServises.getVideo(id);
            const {titulo, descripcion, url}= res.data;
            setVideo({titulo, descripcion, url});
        }

        useEffect(() => { 
            if(params.id){
                getVideoID(params.id);//cuando entra llama a getVideoID
            }
        }, [])

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
                                            <input type="text" className="form-control" id="floatingInput" placeholder="Titulo" name="titulo" onChange={handleInputChange} value={video.titulo} />
                                            <label htmlFor="floatingInput">Titulo</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <textarea className="form-control" id="floatingInput2" placeholder="Descripcion" name="descripcion" onChange={handleInputChange} value={video.descripcion} />
                                            <label htmlFor="floatingInput2">Descripcion</label>
                                        </div>
                                        <div className="form-floating  mb-3">
                                            <input type="text" className="form-control" id="floatingInput3" placeholder="URL" name="url" onChange={handleInputChange} value={video.url} />
                                            <label htmlFor="floatingInput3">URL</label>
                                        </div>
                                        <div className="d-grid gap-2">
                                            {
                                                params.id ?
                                                    <button className="btn btn-info" type="submit">Actualizar</button>
                                                    :
                                                    <button className="btn btn-success" type="submit">Enviar</button>
                                            }
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
