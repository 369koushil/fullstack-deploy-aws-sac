# Paytm App – AWS Deployed Project

## Overview
This is a full stack Paytm-like application deployed on AWS, created to demonstrate backend and DevOps skills.

- Frontend built with React and served using Amazon S3 and CloudFront
- Backend built with Node.js and Express, deployed on Amazon ECS
- Docker images stored in Amazon ECR
- ECS uses EC2 instances
- MongoDB used as the database
- AWS CLI used for deployment

---

## Tech Stack

### Frontend
- React
- Tailwind CSS

### Backend
- Node.js
- Express
- MongoDB

### AWS & DevOps
- Docker
- Amazon EC2
- Amazon ECS
- Amazon ECR
- Amazon S3
- Amazon CloudFront
- AWS CLI

---

## Deployment Summary

### Backend
1. Dockerized Node.js backend
2. Image pushed to Amazon ECR using AWS CLI
3. ECS cluster created using EC2 launch type
4. ECS service runs backend containers

### Frontend
1. React app built using `npm run build`
2. Build files uploaded to Amazon S3
3. CloudFront used as CDN to serve frontend

---

## Local Setup

### Clone Repository
```bash
git clone https://github.com/your-username/paytm-app.git
cd paytm-app
```

### Install Dependencies

Backend:
```bash
cd backend
npm install
node index.js
```

Frontend:
```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file in backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## Use Case
This project is suitable for demonstrating:
- Docker and containerization
- AWS ECS and ECR workflow
- EC2-based container deployment
- S3 and CloudFront static hosting
- Basic DevOps and cloud architecture
