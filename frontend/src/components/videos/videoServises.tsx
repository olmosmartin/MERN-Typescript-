import IVideo from "../../interface/video";
import axios from "axios";

export const getVideos =async ()=>{
    const respuesta = await fetch("http://localhost:3000/videos");
    const data = await respuesta.json();
    /*return await axios.get("http://localhost:3000/videos");*/
    return data;
}

export const getVideo =async (id:string)=>{
    return await axios.post(`http://localhost:3000/videos/${id}`);
}

export const crearVideo =async (video:IVideo)=>{
    return await axios.post("http://localhost:3000/videos", video);
}
