import IVideo from "../../interface/video";
import axios from "axios";

const path="https://videos-prueba-mern.herokuapp.com";
export const getVideos =async ()=>{
    const respuesta = await fetch(`${path}/videos`);
    const data:IVideo[] = await respuesta.json();
    //return await axios.get<IVideo[]>("http://localhost:3000/videos");
    return data;
}

export const getVideo =async (id:string)=>{
    return await axios.get<IVideo>(`${path}/videos/${id}`);
}

export const actualizarVideo =async (id:string,video:IVideo)=>{
    return await axios.put<IVideo>(`${path}/videos/${id}`, video);
}

export const crearVideo =async (video:IVideo)=>{
    return await axios.post(`${path}/videos`, video);
}

export const deleteVideo =async (id:string)=>{
    return await axios.delete<IVideo>(`${path}/videos/${id}`);
}