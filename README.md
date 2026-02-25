# 📌 REST API Project

## 🚀 Overview

This project is a **RESTful API** built using **Node.js, Express.js, and
MongoDB**.\
It provides secure authentication and full CRUD functionality for
**Products** and **Orders**.

The API follows REST principles and uses JWT-based authentication to
protect routes.

------------------------------------------------------------------------

## 🛠 Tech Stack

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT (JSON Web Token)
-   bcrypt (Password Hashing)
-   Nodemon

------------------------------------------------------------------------

## 📂 Project Structure

server.js\
app.js\
api/\
├── routes/\
├── controllers/\
├── models/\
└── middleware/

------------------------------------------------------------------------

## 🔐 Features

-   User Signup & Login\
-   JWT Authentication\
-   Password Hashing with bcrypt\
-   Create / Read / Delete Products\
-   Create / Read / Delete Orders\
-   Protected Routes using Middleware\
-   MongoDB Relationships

------------------------------------------------------------------------

## 📊 Database Relationships

-   One User → Many Orders\
-   One Product → Many Orders\
-   Orders reference Product using ObjectId

------------------------------------------------------------------------

## ▶️ Installation

``` bash
git clone <repo-url>
cd project-folder
npm install
```

------------------------------------------------------------------------

## ▶️ Run the Project

Start the server:

``` bash
npm start
```

For development:

``` bash
nodemon server.js
```

------------------------------------------------------------------------

## 🔑 Authentication

Protected routes require a valid JWT token.

Add the token in request headers:

Authorization: Bearer `<JWT_TOKEN>`{=html}

------------------------------------------------------------------------

## 📦 API Endpoints

### 👤 User

POST /user/signup\
POST /user/login

### 📦 Products

GET /products\
POST /products\
GET /products/:id\
DELETE /products/:id

### 🛒 Orders

GET /orders\
POST /orders\
DELETE /orders/:id

------------------------------------------------------------------------

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

PORT=3000\
MONGO_URI=your_mongodb_connection_string\
JWT_KEY=your_secret_key


