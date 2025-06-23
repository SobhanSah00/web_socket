import {WebSocketServer} from "ws"

const wss = new WebSocketServer({ port : 8080 })

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

wss.on("connection", function(socket) {
    socket.send("hello");

    socket.on("message", function(event) {
        if(event.toString() == "ping") {
            setTimeout(() => {
                socket.send("pong")
            },3000)
        }
    })
})