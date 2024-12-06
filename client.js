const { io } = require("socket.io-client");

const socket = io("http://localhost:5000", {
  transports: ["websocket"], // Ensure WebSocket transport is used
});

socket.on("connect", () => {
  console.log("Connected with ID:", socket.id);

  // Join a room
  socket.emit("join", { userId: "12345" });

  // Send a private message
  socket.emit("privateMessage", {
    senderId: "12345",
    recipientId: "67890",
    message: "Hello, World!",
  });

  // Listen for private messages
  socket.on("privateMessage", (data) => {
    console.log("Received message:", data);
  });
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});
