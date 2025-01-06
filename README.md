```markdown
# API with Express

This project is an API built with Express.js that provides CRUD operations for managing videos. The API interacts with a PostgreSQL database to store and retrieve video information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/dev-hackmann/apiwithexpress.git
   cd apiwithexpress
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up the environment variables by creating a 

.env

 file in the root directory with the following content:
   ```env
   PGHOST=localhost
   PGPORT=5432
   PGDATABASE=mydatabase
   PGUSER=admin
   PGPASSWORD=admin
   PORT=3333
   ```

4. Start the server:
   ```sh
   npm start
   ```

## Usage

The API provides endpoints to create, read, update, and delete videos. You can use tools like Postman or `curl` to interact with the API.

## API Endpoints

- **GET /api/videos**: Fetch all videos
- **GET /api/videos/:id**: Fetch a single video by ID
- **POST /api/videos**: Create a new video
- **PUT /api/videos/:id**: Update an existing video
- **DELETE /api/videos/:id**: Delete a video

### Example Requests

- **Fetch all videos**:
  ```sh
  curl -X GET http://localhost:3333/api/videos
  ```

- **Fetch a single video by ID**:
  ```sh
  curl -X GET http://localhost:3333/api/videos/{videoId}
  ```

- **Create a new video**:
  ```sh
  curl -X POST http://localhost:3333/api/videos -H "Content-Type: application/json" -d '{"title": "Test Video", "description": "Test Description", "duration": 120}'
  ```

- **Update an existing video**:
  ```sh
  curl -X PUT http://localhost:3333/api/videos/{videoId} -H "Content-Type: application/json" -d '{"title": "Updated Title", "description": "Updated Description", "duration": 150}'
  ```

- **Delete a video**:
  ```sh
  curl -X DELETE http://localhost:3333/api/videos/{videoId}
  ```

## Running Tests

To run the tests, use the following command:
```sh
npm test
```

## Project Structure

```
__tests__/
  app.test.js
.env
.gitignore
.vscode/
  settings.json
  tasks.json
app.js
config/
  database.js
controllers/
  videoController.js
coverage/
jest.config.mjs
models/
  videoModel.js
package.json
routes/
  videoRoutes.js
server.js
services/
  videoService.js
```

## Environment Variables

The project uses the following environment variables:

- `PGHOST`: Hostname of the PostgreSQL server
- `PGPORT`: Port number of the PostgreSQL server
- `PGDATABASE`: Name of the PostgreSQL database
- `PGUSER`: Username for the PostgreSQL database
- `PGPASSWORD`: Password for the PostgreSQL database
- `PORT`: Port number for the Express server

Make sure to set these variables in your 

.env

 file before running the project.
```