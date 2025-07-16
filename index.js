// Import necessary modules
const express = require("express");            // Express framework for creating the server
const http = require("http");                  // HTTP module to create server instance
const { Server } = require("socket.io");       // Importing Server class from socket.io
const cors = require("cors");                  // CORS middleware to allow cross-origin requests

// Create an Express app
const app = express();

// Use CORS to allow requests from any origin
app.use(cors());

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a new instance of socket.io and attach it to the server
const io = new Server(server, {
  cors: {
    origin: "*",                // Allow any origin
    methods: ["GET", "POST"],   // Allow only GET and POST requests
  },
});

// Listen for new client connections
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);  // Log the new user's socket ID

  // Listen for the 'send_message' event from clients
  socket.on("send_message", (data) => {
    // Emit the message to all connected clients
    io.emit("receive_message", data);
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);  // Log the disconnected user's socket ID
  });
});

// Start the server on port 5000
server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
