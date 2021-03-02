const cleverbot = require("cleverbot-api-free");
const client = new cleverbot();

client.send(
    "message",
    async response => {
        console.log(response);
    },
);