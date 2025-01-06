import express from 'express'
import videoController from '../controllers/videoController.js'

const router = express.Router()

router.get('/videos', videoController.getVideos);
router.get('/videos/:id', videoController.getVideo);
router.post('/videos', videoController.createVideo);
router.put('/videos/:id', videoController.updateVideo);
router.delete('/videos/:id', videoController.deleteVideo);

export default router