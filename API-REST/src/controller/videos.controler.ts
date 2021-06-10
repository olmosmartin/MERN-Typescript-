import { RequestHandler } from "express";

export const createVideo: RequestHandler = (req, res)=>{
    res.json('crear videos');
}

export const getVideo: RequestHandler = (req, res)=>{
    res.json('obteniendo un solo video');
}

export const getVideos: RequestHandler = (req, res)=>{
    res.json('obteniendo muchos videos');
}

export const updateVideo: RequestHandler = (req, res)=>{
    res.json('actualizando video');
}

export const deleteVideo: RequestHandler = (req, res)=>{
    res.json('eliminar video');
}