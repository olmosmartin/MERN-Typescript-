import IVideo from "../../interface/video";
import axios from "axios";

export const getVideos =async ()=>{
    const respuesta = await fetch("http://localhost:3000/videos");
    const data:IVideo[] = await respuesta.json();
    //return await axios.get<IVideo[]>("http://localhost:3000/videos");
    return data;
}

export const getVideo =async (id:string)=>{
    return await axios.get<IVideo>(`http://localhost:3000/videos/${id}`);
}

export const actualizarVideo =async (id:string,video:IVideo)=>{
    return await axios.put<IVideo>(`http://localhost:3000/videos/${id}`, video);
}

export const crearVideo =async (video:IVideo)=>{
    return await axios.post("http://localhost:3000/videos", video);
}

export const deleteVideo =async (id:string)=>{
    return await axios.delete<IVideo>(`http://localhost:3000/videos/${id}`);
}