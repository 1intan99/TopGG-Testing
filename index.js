const express = require("express");
const topgg = require("@top-gg/sdk");

const app = express();
const wb = new topgg.Webhook(process.env.TOKEN);

app.post("/dbl", wb.listener(vote => {
    console.log(vote);
}));

app.get("/", (req, res) => {
    res.send("OKE!");
});

console.log(`Listening in port: 3k`);

app.listen(3000);