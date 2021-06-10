import { RequestHandler } from "express";
import Video from "../modelo/video";

export const createVideo: RequestHandler = async (req, res) => {
    const { titulo, descripcion, url } = req.body;
    const videoExistente = await Video.findOne({ url: url });
    if (videoExistente) {
        return res.status(301).json({ message: 'la URL ya existe' });
    } else if (!titulo || !descripcion) {
        return res.status(301).json({ message: 'faltan datos' });
    } else {
        const videoNuevo = new Video(req.body);
        const videoGuardado = await videoNuevo.save();
        res.json(videoGuardado);
    }
}

export const getVideo: RequestHandler = async (req, res) => {
    try{
    const videoEncontrado = await Video.findById(req.params.id);
    res.json(videoEncontrado);
    }catch(error){
        res.json(error.message);
    }
}

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (error) {
        res.json(error);
    }
}

export const updateVideo: RequestHandler = async(req, res) => {
    try{
        const videoActualizado = await Video.findByIdAndUpdate(req.params.id,req.body,{new: true});
        res.json(videoActualizado);
        }catch(error){
            res.json(error.message);
        }
}

export const deleteVideo: RequestHandler = async(req, res) => {
    try{
        const videoEncontrado = await Video.findByIdAndDelete(req.params.id);
        res.json(videoEncontrado);
        }catch(error){
            res.json(error.message);
        }
}