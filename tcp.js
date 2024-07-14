const net = require("net");

const server = net.createServer(socket => {
    socket.write("Hey, we are connected");
    socket.on("data", (data) => {
        aconsole.log(`Got the data, ${data}`);
    });
});


server.listen(8080);