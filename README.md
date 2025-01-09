```markdown
# Todo List App

A modern, interactive Todo List app built with React, Node.js, and MongoDB. This app allows users to manage their daily tasks with features like adding, deleting, and marking tasks as complete. The backend is powered by Node.js and connected to a MongoDB database to persist data.

## Features

- **Add Tasks**: Add tasks to your to-do list.
- **Mark Tasks as Completed**: Toggle the completion status of tasks.
- **Delete Tasks**: Remove tasks from the list.
- **Modern User Interface**: Clean and interactive UI with hover effects and smooth animations.

## Technologies Used

- **Frontend**: React.js
  - React Hooks (useState, useEffect)
  - React-Bootstrap (for styling)
  - Axios (for HTTP requests)
  - React Icons (for task actions)
- **Backend**: Node.js, Express.js
  - MongoDB (for persistent data storage)
- **Database**: MongoDB Atlas
- **Styling**: Custom CSS with Bootstrap integration
- **Deployment**: Can be deployed on services like Vercel (Frontend) and Render/Heroku (Backend)

## Installation

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (with npm)
- MongoDB Atlas account (for cloud database)

### Clone the Repository

```bash
git clone https://github.com/MohdRaza216/todo-list-app.git
cd todo-list-app
```

### Backend Setup

1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your `.env` file in the `backend` directory with the following:

    ```env
    MONGO_URI=your-mongodb-uri
    PORT=4000
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

   Your backend will now be running on [http://localhost:4000](http://localhost:4000).

### Frontend Setup

1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend server:
    ```bash
    npm start
    ```

   Your frontend will now be running on [http://localhost:3001](http://localhost:3001).

### Running Both Servers Simultaneously

To run both the frontend and backend simultaneously, you can use tools like `concurrently`. 

1. Install `concurrently` in the root directory:

    ```bash
    npm install concurrently --save-dev
    ```

2. Add the following script to your `package.json` in the root directory:

    ```json
    "scripts": {
      "start": "concurrently \"npm run server\" \"npm run client\"",
      "server": "cd backend && npm start",
      "client": "cd frontend && npm start"
    }
    ```

Now, you can run both the frontend and backend by executing:

```bash
npm start
```

This will start both the servers at once.

## API Endpoints

### GET `/api/todos`

Fetch all todos.

**Response**:
```json
[
  {
    "_id": "unique-id",
    "task": "Learn React",
    "completed": false
  },
  ...
]
```

### POST `/api/todos`

Add a new todo.

**Request Body**:
```json
{
  "task": "Learn Node.js"
}
```

**Response**:
```json
{
  "_id": "unique-id",
  "task": "Learn Node.js",
  "completed": false
}
```

### PUT `/api/todos/:id`

Update the completion status of a todo.

**Request Body**:
```json
{
  "completed": true
}
```

**Response**:
```json
{
  "_id": "unique-id",
  "task": "Learn Node.js",
  "completed": true
}
```

### DELETE `/api/todos/:id`

Delete a todo.

**Response**:
```json
{
  "message": "Todo deleted successfully"
}
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to your fork (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Acknowledgments

- **React** for providing a great framework for building interactive UIs.
- **Node.js and Express.js** for easy-to-setup backend development.
- **MongoDB Atlas** for cloud database services.
- **React-Bootstrap** for modern UI components.
- **React Icons** for interactive icons.

---

Feel free to modify this file as needed for your specific repository and project details!