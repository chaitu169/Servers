const dgram = require("dgram");
const socket = dgram.createSocket("udp4");

socket.on("message", (msg, rinfo) => {
    console.log(msg, `address ${rinfo.address} port ${rinfo.port}`);
})

socket.bind(8081);