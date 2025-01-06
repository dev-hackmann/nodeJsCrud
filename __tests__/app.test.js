import request from 'supertest';
import app from '../app.js';

describe('Video API', () => {
  it('should fetch all videos', async () => {
    const res = await request(app).get('/api/videos');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });


  it('should create a new video', async () => {
    const newVideo = {
      title: 'Test Video',
      description: 'Test Description',
      duration: 120
    };
    const res = await request(app).post('/api/videos').send(newVideo);
    expect(res.statusCode).toEqual(201);
  });

  it('should update an existing video', async () => {
    const videoId = '8eff729c-7d7a-4072-a591-a492879b3925'; 
    const updatedVideo = {
      title: 'Updated Title',
      description: 'Updated Description',
      duration: 150
    };
    const res = await request(app).put(`/api/videos/${videoId}`).send(updatedVideo);
    expect(res.statusCode).toEqual(200);
  });

  it('should delete a video', async () => {
    const videoId = '8eff729c-7d7a-4072-a591-a492879b3925'; 
    const res = await request(app).delete(`/api/videos/${videoId}`);
    expect(res.statusCode).toEqual(200);
  });
});