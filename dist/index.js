"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const http_1 = __importDefault(require("http"));
const PORT = 8080;
const server = http_1.default.createServer();
const wss = new ws_1.WebSocketServer({ server });
// wss.on("connection", function(socket) {
//     console.log("user connected");
//     socket.send("hello there")
//     setInterval(() => {
//         socket.send('currect solana price is ' + Math.random());    
//     }, 1000);
//     socket.on("message", function(event) {
//         console.log(event.toString());
//     }) 
// })
// echo messgae application 
wss.on("connection", function (socket) {
    console.log("Client connected");
    socket.send("hello");
    socket.on("message", function (event) {
        console.log("Received:", event.toString());
        if (event.toString() === "ping") {
            setTimeout(() => {
                socket.send("pong");
            }, 3000);
        }
    });
});
server.listen(PORT, () => {
    console.log("WebSocket server listening on port", PORT);
});
