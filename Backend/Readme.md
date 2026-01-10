🚀 Secure Task Management API

A scalable REST API built with Node.js, Express, and MongoDB, featuring JWT authentication, role-based access control, and secure CRUD operations.
Designed with production-level architecture, security, and scalability in mind.

🛠 Tech Stack

Node.js + Express

MongoDB + Mongoose

JWT (Access & Refresh Tokens)

bcrypt (Password hashing)

Zod (Validation)

Swagger (API Documentation)

Helmet, CORS, Morgan

📂 Project Structure
src/
 ├── config/
 ├── modules/
 │   ├── auth/
 │   ├── users/
 │   ├── tasks/
 ├── middlewares/
 ├── utils/
 ├── docs/
 ├── app.js
 └── server.js

🔐 Authentication Flow

User registers with hashed password

Login returns:

Access Token (15 min)

Refresh Token (7 days)

Access Token required for protected APIs

Refresh Token used to generate new access token

Logout invalidates refresh token

👥 Role-Based Access
Role	Permissions
USER	Manage own tasks
ADMIN	Manage all tasks & users
📡 API Endpoints
Auth
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/logout

Tasks (Protected)
GET    /api/v1/tasks
POST   /api/v1/tasks
GET    /api/v1/tasks/:id
PUT    /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

📘 API Documentation

Swagger UI available at:

http://localhost:5000/api-docs


Supports JWT authentication via Bearer Token.

🧪 Setup Instructions
git clone <repo-url>
cd backend
npm install


Create .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/secure_task_api
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d


Run server:

npm run dev



-------------------------------------------
🚀 Scalability & Future Improvements

Redis caching for frequently accessed data

Rate limiting to prevent abuse

Horizontal scaling with load balancer

Microservices split (Auth & Task services)

Docker + CI/CD pipeline

✅ Security Practices

Password hashing with bcrypt

JWT-based stateless authentication

Refresh token storage & rotation

Input validation with Zod

Role-based authorization

Secure HTTP headers (Helmet)