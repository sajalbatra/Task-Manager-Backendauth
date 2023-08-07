# To-Do List Application - Backend

This is the backend part of the To-Do List application, which provides the server-side logic and handles data storage and authentication. The backend is built using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js.

## Technologies Used

- MongoDB: A NoSQL database used to store user information and task data.
- Express.js: A backend web application framework for Node.js used to build the server-side logic.
- Node.js: A JavaScript runtime used for server-side development.
- Mongoose: A MongoDB object modeling tool for Node.js, used to interact with the MongoDB database.

## Prerequisites

Before running the backend, ensure you have the following software installed on your system:

1. Node.js: You can download Node.js from the official website: https://nodejs.org/
2. MongoDB: Install MongoDB Community Edition: https://www.mongodb.com/try/download/community

## Installation

1. Clone this repository to your local machine:

```bash
git clone <repository_url.git>
```

2. Navigate to the backend directory:

```bash
cd to-do-list-application/backend
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the backend directory and add the following environment variables:

```
MONGODB_URI=<your_mongodb_connection_string>
SESSION_SECRET=<your_session_secret_key>
```

Replace `<your_mongodb_connection_string>` with your MongoDB database connection string, and `<your_session_secret_key>` with a secret key for session management.

## Running the Backend

To start the backend server, run the following command:

```bash
npm start
```

This will start the server on `http://localhost:5000`.

## API Endpoints

The backend provides the following API endpoints:

- `POST /api/auth/signup`: Used for user registration.
- `POST /api/auth/login`: Used for user login and authentication.

## Contributing

If you want to contribute to this project, you are welcome to submit pull requests. Please ensure that your changes are well-documented and tested.


## Acknowledgments

- Thanks to the MERN stack community for providing excellent tools and resources.
- Thanks to all the contributors who helped make this project better.