# Task Manager API

A Node.js-based Task Manager API that allows users to create, view, and manage tasks with role-based access control. Admin users can manage all tasks, while regular users can only manage their own.

## Features
- **User Role Management**: Admins have elevated privileges, while regular users can only manage their tasks.
- **Task Management**: Create, view, update, and delete tasks.
- **Authentication and Authorization**: Protected routes with role-based access.

---


## API Endpoints

### Authentication Routes

| Method | Endpoint            | Description                  | Authentication |
|--------|---------------------|------------------------------|----------------|
| POST   | `/api/auth/register` | Register a new user          | No             |
| POST   | `/api/auth/login`    | Login user and get JWT token | No            |
| GET    | `/api/users`    | Get all users (Admin only)                  | Yes            |
| GET    | `/api/users/me` | Get current user details                    | Yes            |
| PUT    | `/api/users/:id`| Update user profile (Admin: any, User: own) | Yes            |
| DELETE | `/api/users/:id`| Delete user profile (Admin: any, User: own) | Yes            |

### Task Routes

| Method | Endpoint          | Description                                   | Authentication |
|--------|-------------------|-----------------------------------------------|----------------|
| POST   | `/api/tasks`      | Create a new task                            | Yes            |
| GET    | `/api/tasks`      | Get tasks (Admin: all tasks, User: own tasks) | Yes            |
| PUT    | `/api/tasks/:id`  | Update a task (Admin: any, User: own tasks)   | Yes            |
| DELETE | `/api/tasks/:id`  | Delete a task (Admin: any, User: own tasks)   | Yes            |

---

## Setup

1. Clone the repository:
   ```bash
   git clone <https://github.com/surajmendhe5573/Task-Manager.git>
   cd <task manager>


## Getting Started

**Install dependencies and start the server:**

```bash
npm install
npm start
```

### Prerequisites
- Node.js and npm installed
- MongoDB installed

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)
- **Password Hashing**: bcrypt
- **API Testing**: Postman
- **Version Control**: Git and GitHub
## Environment Variables

Create a `.env` file in the root directory of the project with the following variables:

```
# Port
PORT=5000

# Database Connection
MONGO_URI=mongodb://localhost:27017/task-manager

# Secret Key
JWT_SECRET= secretKey

```


## 🚀 About Me
I'm a Backend developer...


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/surajmendhe5573)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/suraj-mendhe-569879233/?original_referer=https%3A%2F%2Fsearch%2Eyahoo%2Ecom%2F&originalSubdomain=in)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)


