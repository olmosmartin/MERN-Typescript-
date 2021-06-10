import express from "express";
const router = express.Router()
import * as videoControler from "../controller/videos.controler";

router.get('/videos', videoControler.getVideos);

router.get('/videos/:id', videoControler.getVideo);

router.post('/videos', videoControler.createVideo);

router.delete('/videos', videoControler.deleteVideo);

router.put('/videos', videoControler.updateVideo);



export default router;