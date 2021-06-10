
export const getVideos =async ()=>{
    const respuesta = await fetch("http://localhost:3000/videos");
    const data = await respuesta.json();
    /*return await axios.get("http://localhost:3000/videos");*/
    return data;
}
