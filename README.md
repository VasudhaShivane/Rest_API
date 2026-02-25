📌 REST API Project
🚀 Overview

This is a RESTful API built using Node.js, Express, and MongoDB.
It supports user authentication and CRUD operations for Products and Orders.

🛠 Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt (Password Hashing)

Nodemon

📂 Project Structure
server.js
app.js
api/
 ├── routes/
 ├── controllers/
 ├── models/
 └── middleware/
🔐 Features

User Signup & Login

JWT Authentication

Password Hashing

Create / Read / Delete Products

Create / Read / Delete Orders

Protected Routes using Middleware

📊 Database Relationships

One User → Many Orders

One Product → Many Orders

Orders reference Product using ObjectId

▶️ Installation
git clone <repo-url>
cd project-folder
npm install
▶️ Run Project
npm start

For development:

nodemon server.js
🔑 Authentication

Protected routes require:

Authorization: Bearer <JWT_TOKEN>
📦 API Endpoints
User

POST /user/signup

POST /user/login

Products

GET /products

POST /products

GET /products/:id

DELETE /products/:id

Orders

GET /orders

POST /orders

DELETE /orders/:id
