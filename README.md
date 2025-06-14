# Snapchat Backend (Node.js + Express + Prisma + PostgreSQL)

This is a backend API for a Snapchat-like application, built with Node.js, Express, Prisma ORM, and PostgreSQL. It supports user authentication, stories, snaps, spotlights, chats, and friend management.

## Features

- User signup and login (JWT authentication)
- Search users by username or email
- Send and receive friend requests
- Accept/reject friend requests
- Send and receive snaps (media)
- Post and view stories (24-hour expiry)
- Upload and view spotlight videos
- Real-time chat via Socket.IO
- RESTful API structure

## Project Structure

```
src/
  app.js                # Express app and Socket.IO setup
  controllers/          # Route controllers (auth, snap, story, spotlight, chat, friend)
  middleware/           # Authentication middleware
  routes/               # Express route definitions
  prismaClient.js       # Prisma client instance
uploads/
  videos/               # Uploaded video files
prisma/
  schema.prisma         # Prisma schema
  migrations/           # Database migrations
.env                    # Environment variables
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- PostgreSQL database

### Setup

1. **Clone the repository**

   ```
   git clone <repo-url>
   cd snapchat-backend
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env` and set your database connection string and JWT secret:

   ```
   DATABASE_URL="postgresql://<user>:<password>@localhost:5432/<db_name>"
   JWT_SECRET=your-strong-secret
   ```

4. **Set up the database**

   Run Prisma migrations to create tables:

   ```
   npx prisma migrate deploy
   ```

   Or for development:

   ```
   npx prisma migrate dev
   ```

5. **Start the server**

   ```
   node server.js
   ```

   Or with nodemon for development:

   ```
   npx nodemon server.js
   ```

6. **API will be running at** `http://localhost:3001`

## API Endpoints

### Auth

- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/login` — Login and receive JWT
- `GET /api/auth/me` — Get current user info (requires JWT)

### Users

- `GET /api/users/search?query=...` — Search users by username or email

### Friends

- `POST /api/friends/request` — Send friend request
- `GET /api/friends/requests` — View incoming friend requests
- `POST /api/friends/respond` — Accept/reject friend request

### Snaps

- `POST /api/snaps` — Send a snap
- `GET /api/snaps` — Get received snaps

### Stories

- `POST /api/stories` — Post a story
- `POST /api/stories/upload` — Upload a story video
- `GET /api/stories/:userId` — Get stories for a user
- `GET /api/stories/public` — Get all public stories

### Spotlight

- `POST /api/spotlight` — Post a spotlight
- `POST /api/spotlight/upload` — Upload a spotlight video
- `GET /api/spotlight/public` — Get all public spotlights

### Chats

- `POST /api/chats` — Send a chat message
- `GET /api/chats?withUserId=...` — Get chat history with a user

## Real-time Chat

- Socket.IO is available at the same server.
- Join a chat room: emit `joinRoom` with `{ userId, otherUserId }`
- Send a message: emit `chatMessage` with `{ from, to, message }`

## File Uploads

- Videos are uploaded to `/uploads/videos` and served statically.

## Development Notes

- Prisma client is generated in `/generated/prisma`
- Use `npx prisma generate` after modifying `schema.prisma`
- JWT tokens are required for most endpoints (send as `Authorization: Bearer <token>`)
