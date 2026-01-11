🚀 Secure Task Management System (Full Stack)

A full-stack web application built with Node.js, Express, MongoDB, and React, featuring JWT authentication, role-based access control, and a clean Tailwind CSS UI.
Designed with security, scalability, and real-world engineering practices in mind.

✨ Features
🔐 Authentication & Security

User registration & login

Password hashing using bcrypt

JWT-based authentication

Access Token (short-lived)

Refresh Token (stored securely)

Logout support

Protected routes using Bearer tokens

Input validation using Zod

Secure headers with Helmet

👥 Role-Based Access Control

USER

Can create, read, update, and delete their own tasks

ADMIN

Can access all users’ tasks

📝 Task Management

Create tasks

Update task status:

🔴 TODO

🟡 IN_PROGRESS

🟢 DONE

Delete tasks

Ownership checks enforced at backend

Real-time UI updates

🎨 Frontend UI

Built with React + Tailwind CSS

Clean blue-themed design

Status badges with color coding

Strike-through for completed tasks

Hover animations for better UX

Loading indicators during API calls

🛠 Tech Stack
Backend

Node.js

Express.js

MongoDB + Mongoose

JWT (jsonwebtoken)

bcrypt

Zod

Swagger (API Documentation)

Frontend

React (Vite)

Tailwind CSS

Axios

React Router

📂 Project Structure
```
root/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   └── tasks/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── docs/
│   │   ├── app.js
│   │   └── server.js
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── .gitignore
│
└── README.md
```

📡 API Endpoints
Authentication
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

Swagger UI is available at:

http://localhost:5000/api-docs


Supports JWT authentication using Bearer Token.

⚙️ Setup Instructions
1️⃣ Clone the repository
git clone <your-repo-url>
cd <repo-name>

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

PORT=5000
MONGO_URI=mongodb://localhost:27017/secure_task_api
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d


Run backend:

npm run dev

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔐 Authentication Flow (High Level)

User registers → password hashed

Login → access + refresh token issued

Access token sent via:

Authorization: Bearer <access_token>


Refresh token used to obtain new access token

Logout invalidates refresh token

🚀 Scalability & Future Enhancements

Redis caching for frequent queries

Rate limiting to prevent abuse

Role-based dashboards

Dockerized deployment

CI/CD pipeline

Microservices (Auth & Task services)

WebSockets for real-time updates

✅ Security Best Practices Used

Password hashing (bcrypt)

JWT-based stateless authentication

Refresh token storage & rotation

Input validation

Role-based authorization

Secure HTTP headers

Environment variables hidden via .gitignore

🏁 Project Status

✔ Backend complete
✔ Frontend complete
✔ Secure & scalable architecture
✔ Ready for evaluation and deployment
