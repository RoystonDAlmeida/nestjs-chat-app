# Real-Time Chat Application

A real-time chat application built with NestJS, leveraging WebSockets for real-time messaging and JWT for user authentication. This application allows users to register, log in, and communicate with each other in real-time.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [WebSocket Events](#websocket-events)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication using JWT
- Real-time messaging between users using WebSockets
- Notifications for new messages
- Typing indicators to show when users are typing
- Simple user interface for chatting

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database for storing user data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Socket.IO**: A JavaScript library for real-time web applications.
- **bcrypt**: A library to hash passwords securely.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/RoystonDAlmeida/nestjs-chat-app.git
    cd nestjs-chat-app
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory of the project and add your MongoDB connection string and JWT secret:

    ```bash
    MONGODB_URI = 'your_connection_string'
    JWT_SECRET = 'your_jwt_secret'
    ```

4. Make sure you have MongoDB running on your machine or update the connection string to point to your MongoDB instance.

## Configuration

The application uses environment variables defined in the `.env` file. Ensure that you set the following variables:

MONGODB_URI and JWT_SECRET

## Usage

### Running the Application

To start the application, run:

    ```bash
    npm run start
    ```

The application will be available at `http://localhost:3000`.

### Accessing the Chat Interface

Open your web browser and navigate to `http://localhost:3000`. You should see the chat interface where you can register and log in.

## API Endpoints

### Authentication Endpoints

1. **Register User**

   - **Method**: `POST`
   - **Endpoint**: `/auth/register`
   - **Request Body**:
     ```json
     {
       "email": "user@example.com",
       "password": "yourpassword"
     }
     ```

2. **Login User**

   - **Method**: `POST`
   - **Endpoint**: `/auth/login`
   - **Request Body**:
     ```json
     {
       "email": "user@example.com",
       "password": "yourpassword"
     }
     ```
   - **Response**:
     ```json
     {
       "access_token": "your_jwt_token"
     }
     ```

### WebSocket Events

1. **Connect**

   - Event triggered when a user connects to the WebSocket server.

2. **Disconnect**

   - Event triggered when a user disconnects from the WebSocket server.

3. **Send Message**

   - Event Name: `newMessage`
   - Description: Sends a new message to all connected clients.
   - Payload:
     ```json
     {
       "message": "your_message"
     }
     ```

4. **Receive Message**

   - Event Name: `messageReceived`
   - Description: Broadcasts received messages to all connected clients.

## Running the Application

1. Ensure MongoDB is running on your machine.
2. Start the NestJS application using `npm run start`.
3. Open multiple browser tabs at `http://localhost:3000` to simulate different users chatting in real time.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.