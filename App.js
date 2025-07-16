// Import required hooks from React and socket.io-client for WebSocket communication
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

// Connect to the Socket.IO server running on localhost:5000
const socket = io("http://localhost:5000");

function App() {
  // State to hold the current input message
  const [message, setMessage] = useState("");

  // State to hold the list of all received messages
  const [messages, setMessages] = useState([]);

  // useEffect hook runs once when the component mounts
  useEffect(() => {
    // Function to handle incoming messages from the server
    const handleReceiveMessage = (data) => {
      // Append new message to the existing list
      setMessages((prev) => [...prev, data]);
    };

    // Listen for 'receive_message' event from server
    socket.on("receive_message", handleReceiveMessage);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      socket.off("receive_message", handleReceiveMessage);
    };
  }, []);

  // Function to send the current message to the server
  const sendMessage = () => {
    if (message.trim() !== "") {
      socket.emit("send_message", message);  // Emit message to server
      setMessage("");                         // Clear input box after sending
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Realtime Chat</h2>

      {/* Message display area */}
      <div style={{ marginBottom: 20 }}>
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div> // Display each message
        ))}
      </div>

      {/* Input field for typing message */}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update message state on input change
      />

      {/* Button to send message */}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
