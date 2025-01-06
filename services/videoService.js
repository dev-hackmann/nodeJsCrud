import db from '../config/database.js'
import Video from "../models/videoModel.js"
import { randomUUID } from 'crypto';

const getAllVideos = async () => {
  try {
    const videos = await db.query('SELECT * FROM videos')
    return videos.rows.map(row => new Video(row.id, row.title, row.description, row.duration))
  } catch (error) {
    throw new Error('Erro ao obter videos: ' + error.message)
  }
};
  
  const getVideoById = async (id) => {
    try {
      const videos = await db.query('SELECT * FROM videos where id = $1', [id])
      return videos.rows.map(row => new Video(row.id, row.title, row.description, row.duration))
    } catch (error) {
      throw new Error('Erro ao obter videos: ' + error.message)
    }
  };
  
  const createVideo = async (VideoData) => {
    try {
      const videoId = randomUUID()
      const { title, description, duration } = VideoData
      await db.query('INSERT INTO videos (id, title, description, duration) VALUES ($1, $2, $3, $4)', [videoId, title, description, duration])
    } catch (error) {
      throw new Error('Erro ao criar um video: ' + error.message)
    }
  };
  
  const updateVideo = async (id, VideoData) => {
    try {
      const { title, description, duration } = VideoData
      await db.query('UPDATE videos SET title = $1, description = $2, duration = $3 WHERE id = $4', [title, description, duration, id])
    } catch (error) {
      throw new Error('Erro ao atualizar um video: ' + error.message)
    }
  };
  
  const deleteVideo = async (id) => {
    try {
      await db.query('DELETE FROM videos WHERE id = $1', [id])
    } catch (error) {
      throw new Error('Erro ao deletar um video: ' + error.message)
    }
  };

  const videoService = {
    getAllVideos,
    getVideoById,
    createVideo,
    updateVideo,
    deleteVideo,
  };
  
  export default videoService;
  