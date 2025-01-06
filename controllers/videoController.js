import videoService from '../services/videoService.js'

const getVideos = async (req, res) => {
  try {
    const videos = await videoService.getAllVideos()
    res.status(200).json(videos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};
  
  const getVideo = async (req, res) => {
    try {
      const { id } = req.params
      const video = await videoService.getVideoById(id)
      res.status(200).json(video)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  };
  
  const createVideo = async (req, res) => {
    try {
      const { title, description, duration } = req.body
      await videoService.createVideo({ title, description, duration })
      res.status(201).send()
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  };
  
  const updateVideo = async (req, res) => {
    try {
      const { id } = req.params
      const { title, description, duration } = req.body
      await videoService.updateVideo(id, { title, description, duration })
      res.status(200).send()
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  };
  
  const deleteVideo = async (req, res) => {
    try {
      const { id } = req.params
      await videoService.deleteVideo(id)
      res.status(200).send()
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  };
  
const videoController = {
  getVideos,
  getVideo,
  createVideo,
  updateVideo,
  deleteVideo,
};

export default videoController
