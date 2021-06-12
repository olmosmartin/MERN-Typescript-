interface Video{
    _id?:string
    titulo:string;
    descripcion:string;
    url:string;
    createdAt?:string | Date;
    updateAt?:string | Date;
}
export default Video;
