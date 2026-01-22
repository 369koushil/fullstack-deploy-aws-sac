
# Paytm App

## Description

This is a Paytm-like application that allows users to authenticate, transfer money to other users, and apply transaction concepts in a relational database management system (RDBMS) for handling money transfers. The app ensures data integrity by rolling back transactions if they fail, preventing any money from being lost or transferred incorrectly.

### Features:
- **User Authentication**: Users can register, log in, and authenticate using JWT (JSON Web Token).
- **Money Transfer**: Users can transfer money to another user. Transactions are handled with rollback mechanisms in case of failure, ensuring safety and consistency.
- **Transaction Handling**: If a transaction fails, it is aborted and the changes are rolled back to maintain the original state.

## Tech Stack

- **Frontend**:
  - React
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express
  - MongoDB
- **Libraries**:
  - JWT (for user authentication)
  - Zod (for input validation)
  - React-Router-Dom (for frontend routing)

## Installation and Running Guide

Follow these steps to install and run the Paytm App locally.

### Step 1: Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/paytm-app.git
cd paytm-app
```

### Step 2: navigation and installation of dependencies

1. Navigate to the backend folder and frontend

   ```bash
   cd backend
   ```
   ```bash
   cd frontend
   ```

2. Install  Dependencies

  run this command in both terminals

   ```bash
   npm install
   ```
   

### Step 3: Configure MongoDB

- If you're using **MongoDB Atlas**, get your connection string from your MongoDB Atlas dashboard.
- If you're running **MongoDB locally**, ensure MongoDB is running on the default port (`27017`) or use a custom URI if required.

Once you have your MongoDB URI, create a `.env` file in the `backend` directory and add the following content:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

- Replace `your_mongodb_connection_string` with the actual MongoDB connection string.
- Set a secure `JWT_SECRET` for signing JWT tokens.



### Step 4: run locally
 
**backend** 
```bash 
node index.js
```

**frontend**
```bash
npm start
```

## Preveiw

![Alt text](screenshorts/startpage.png)
![Alt text](screenshorts/signup.png)
![Alt text](screenshorts/send.png)
![Alt text](screenshorts/dashboard.png)
![Alt text](screenshorts/search.png)






