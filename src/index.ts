import {WebSocketServer} from "ws"
import http from "http"

const PORT = parseInt(process.env.PORT || "8000")

const server = http.createServer();
const wss = new WebSocketServer({ server })

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

server.listen(PORT , "0.0.0.0", () => {
    console.log("WebSocket server listening on port", PORT);
});